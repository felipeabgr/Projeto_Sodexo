# encoding: utf-8
from django.test import TestCase
from userprofile.models import UserProfile
from django.db.models.fields import *


class UserProfileTetsCase(TestCase):
    def test_fields(self):
        meta = UserProfile._meta

        self.assertIsInstance(meta.get_field('user'), related.ForeignKey)
        self.assertIsInstance(meta.get_field('name'), CharField)
        self.assertIsInstance(meta.get_field('cpf'), IntegerField)
        self.assertIsInstance(meta.get_field('cardNumber'), IntegerField)
        self.assertIsInstance(meta.get_field('dailyValue'), DecimalField)

    def test_unicode(self):
        c = UserProfile(name='name_test')
        self.assertEquals(str(c), c.name)
