# coding=utf-8
import string
import random

#from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth import get_user_model
User = get_user_model()

class ChangeUserPassword(object):

    def aplyChange(self, userid):
        newPass = ''.join([random.choice(string.ascii_letters + string.digits)
                                                        for n in xrange(8)])
        print "aaaaaaaaaaa"

        userdb = User.objects.get(id=userid)
        userdb.set_password(newPass)
        userdb.save()
        return newPass
