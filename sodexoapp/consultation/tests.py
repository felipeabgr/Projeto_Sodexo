# encoding: utf-8
import json

from django.test import TestCase
from django.db.models.fields import *
from django.test.client import Client

from consultation.models import SodexoClient
from consultation import factories


class SodexoClientTetsCase(TestCase):
    def test_fields(self):
        meta = SodexoClient._meta

        self.assertIsInstance(meta.get_field('user'), related.ForeignKey)
        self.assertIsInstance(meta.get_field('name'), CharField)
        self.assertIsInstance(meta.get_field('cpf'), CharField)
        self.assertIsInstance(meta.get_field('cardNumber'), CharField)
        self.assertIsInstance(meta.get_field('dailyValue'), DecimalField)

    def test_unicode(self):
        c = SodexoClient(name='name_test')
        self.assertEquals(str(c), c.name)


class SodexoClientHandlerTest(TestCase):
    fixture = ['basic_auth.yaml']

    def test_get_sodexo_client_url(self):
        c = Client()
        c.login(username='admin', password='admin')

        ret = c.get('/consultation/sodexoclient')
        self.assertEquals(ret.status_code, 200, 'wrong status code.')

    def test_get_list(self):

        user = factories.UserFactory.create(
            id=1,
            username="usertest",
            email='usertest@sodexoapp.com')

        factories.SodexoClientFactory.create(
            user=user,
            name='user',
            cpf='12345678912',
            cardNumber='123456789',
            dailyValue=30.00)

        ret = self.client.get('/consultation/sodexoclient')

        self.assertEquals(ret.status_code, 200,
                          'Status_code incorreto(%d)\n'
                          'Content: \n%s' % (ret.status_code, ret.content))

        content = json.loads(ret.content)
        self.assertEquals(content.get('total'), 1)

        sodexoclient = content.get('result')[0]
        self.assertEquals(sodexoclient.get('user').get('username'), 'usertest')
        self.assertEquals(sodexoclient.get('user').get('email'),
                          'usertest@sodexoapp.com')
        self.assertEquals(sodexoclient.get('name'), 'user')
        self.assertEquals(sodexoclient.get('cpf'), '12345678912')
        self.assertEquals(sodexoclient.get('cardNumber'), '123456789')
        self.assertEquals(sodexoclient.get('dailyValue'), '30')

    def test_get_list_empty(self):
        ret = self.client.get('/consultation/sodexoclient')

        self.assertEquals(ret.status_code, 200,
                          'Status_code incorreto(%d)\n'
                          'Content: \n%s' % (ret.status_code, ret.content))

        content = json.loads(ret.content)
        self.assertEquals(content.get('total'), 0)
        self.assertEquals(content.get('result'), [])

    def test_post(self):
        data = {
            'name': 'leandro',
            'cpf': '25694845525',
            'cardNumber': '12169564',
            'dailyValue': 15.0,
            'user': {
                'username': 'tiago',
                'email': 'tiago@inatel.br',
                'password': 'grs6955'
                }
        }

        c = Client()
        c.login(username='admin', password='admin')


        ret = c.post('/consultation/sodexoclient', data)
        self.assertEquals(ret.status_code, 200,
            'Status_code incorreto(%d)\n'
            'Content: \n%s' % (ret.status_code, ret.content))

        #id = json.loads(ret.content)['result']['id']

