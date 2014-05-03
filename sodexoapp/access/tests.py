#coding: utf-8
from django.test.client import Client
from django.test import TestCase


class AccessAuthorizationDjangoTest(TestCase):
    fixtures = ['basic_auth.yaml']

    def test_access_login_page(self):
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

    def test_login_allowed(self):
        c = Client()
        ret = c.post('/access/login', {'username': 'admin', 'password': 'admin'})
        self.assertEquals(ret.status_code, 200, 'Wrong status code.')

    def test_login_not_allowed(self):
        c = Client()
        ret = c.post('/access/login', {'username': 'admin', 'password': 'ssss'})

        self.assertEquals(ret.status_code, 200, 'Wrong status code.')
        self.assertTrue('error_msg' in ret.context)
