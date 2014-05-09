#coding: utf-8
from mock import patch

from django.test import TestCase
from django.contrib.auth import get_user_model, SESSION_KEY
from django.core import mail

from mail import send_generic_mail
User = get_user_model()


class AccessAuthorizationDjangoTest(TestCase):
    fixtures = ['basic_auth.yaml']

    def test_access_login_by_domain(self):
        ret = self.client.get('/', follow=True)
        self.assertEquals(ret.status_code, 200, 'Wrong status code.')

    def test_access_login_by_address(self):
        ret = self.client.get('/access/login')
        self.assertEquals(ret.status_code, 200, 'Wrong status code.')

    def test_access_logout_by_address(self):
        ret = self.client.get('/access/logout', follow=True)
        self.assertEquals(ret.status_code, 200, 'Wrong status code.')

    def test_login_authorized(self):
        ret = self.client.post('/access/login',
            {'username': 'admin', 'password': 'admin'}, follow=True)
        self.assertEquals(ret.status_code, 200, 'Wrong status code.')
        self.assertFalse('error_msg' in ret.context)

    def test_login_not_authorized(self):
        ret = self.client.post('/access/login',
            {'username': 'admin', 'password': 'ssss'})

        self.assertEquals(ret.status_code, 200, 'Wrong status code.')
        self.assertTrue('error_msg' in ret.context)

    @patch('access.views.authenticate')
    def test_login_django_autenticate_mock(self, m_authenticate):

        m_authenticate.return_value = None

        ret = self.client.post('/access/login',
            {'username': 'admin', 'password': 'admin'},
         follow=True)

        self.assertTrue('error_msg' in ret.context)

    @patch('access.views.authenticate')
    def test_calls_authenticate_with_assertion_from_post(
        self, mock_authenticate):
        mock_authenticate.return_value = None
        self.client.post('/access/login',
            {'username': 'admin', 'password': 'admin'})
        mock_authenticate.assert_called_once_with(username='admin',
            password='admin')

    @patch('access.views.authenticate')
    def test_gets_logged_in_session_if_authenticate_returns_a_user(
        self, mock_authenticate):
        user = User.objects.get(email='admin@example.com')
        mock_authenticate.return_value = user
        user.backend = ''
        self.client.post('/access/login',
            {'username': 'adasmin', 'password': 'admin'})
        self.assertEqual(self.client.session[SESSION_KEY], user.pk)

    @patch('access.views.authenticate')
    def test_does_not_get_logged_in_if_authenticate_returns_None(
        self, mock_authenticate):
        mock_authenticate.return_value = None
        self.client.post('/access/login',
            {'username': 'adasmin', 'password': 'admin'})
        self.assertNotIn(SESSION_KEY, self.client.session)

class SendMailTest(TestCase):

    def test_email_was_sent(self):
        a = self.client.get('/access/email')
        self.assertContains(a, 'ok! 1')

    def test_email_params(self):
        send_generic_mail('Este é o assunto', 'Esta é a menssagem',
         ['tiagohl@outlook.com', '123@exemplo.com'])

        self.assertEqual(len(mail.outbox), 1)
        self.assertEqual(mail.outbox[0].subject, 'Este é o assunto')
        self.assertEqual(mail.outbox[0].body, 'Esta é a menssagem')
        self.assertEquals(mail.outbox[0].to[0], 'tiagohl@outlook.com')