#coding: utf-8
import mock

from django.test.client import Client
from django.test import TestCase
from django.contrib.auth import authenticate


class AccessAuthorizationDjangoTest(TestCase):
    fixtures = ['basic_auth.yaml']

    def test_access_login_by_domain(self):
        c = Client()
        ret = c.get('/', follow=True)
        self.assertEquals(ret.status_code, 200, 'Wrong status code.')

    def test_access_login_by_address(self):
        c = Client()
        ret = c.get('/access/login')
        self.assertEquals(ret.status_code, 200, 'Wrong status code.')

    def test_access_logout_by_address(self):
        c = Client()
        ret = c.get('/access/logout', follow=True)
        self.assertEquals(ret.status_code, 200, 'Wrong status code.')

    def test_login_authorized(self):
        c = Client()
        ret = c.post('/access/login', {'username': 'admin', 'password': 'admin'}, follow=True)
        self.assertEquals(ret.status_code, 200, 'Wrong status code.')
        self.assertFalse('error_msg' in ret.context)

    def test_login_not_authorized(self):
        c = Client()
        ret = c.post('/access/login', {'username': 'admin', 'password': 'ssss'})

        self.assertEquals(ret.status_code, 200, 'Wrong status code.')
        self.assertTrue('error_msg' in ret.context)

    @mock.patch.object(access.views.authenticate)
    def test_login_django_autenticate_mock(self, m_authenticate):

        m_authenticate.return_value = None

        c = Client()
        ret = c.post('/access/login', {'username': 'admin', 'password': 'admin'},
         follow=True)

        self.assertTrue('error_msg' in ret.context)
