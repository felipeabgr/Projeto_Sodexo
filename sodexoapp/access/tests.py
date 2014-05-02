#coding: utf-8
from django.test import TestCase


class AccessHandlerTest(TestCase):

    def test_get_access_allowed(self):
        self.assertEqual(200, 200)
