# encoding: utf-8
from django.contrib.auth.models import User
from django.db import models


class UserProfile(models.Model):

    user = models.ForeignKey(User)
    name = models.CharField(max_length=50)
    cpf = models.IntegerField(max_length=11)
    cardNumber = models.IntegerField(max_length=15)
    dailyValue = models.DecimalField(max_digits=4, decimal_places=2,
                                                                default=00.00)

    def __unicode__(self):
        return self.name
