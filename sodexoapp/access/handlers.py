# coding=utf-8
from piston.handler import BaseHandler
from access.changeUserPassword import ChangeUserPassword

from django.http import HttpResponse
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth import get_user_model
User = get_user_model()


class UserHandler(BaseHandler):
    allowed_methods = ('GET',)
    model = User
    fields = ('id', 'username', 'email')

    def read(self, request, id=None, start_id=None):
        if id:
            try:
                return dict (result=User.objects.get(id=id))
            except ObjectDoesNotExist:
                return HttpResponse('Not found', status=404)
        else:
            return dict (result=User.objects.all(),
                total=User.objects.count())


class UserAuthenticationHandler(BaseHandler):
    allowed_methods = ('PUT',)
    model = User

    def update(self, request, id):
        try:
            user = User.objects.get(id=id)
            cup = ChangeUserPassword()
            newPass = cup.aplyChange(user)
            return {'result':'Sua nova senha foi gerada com sucesso e enviada por email'}
        except ObjectDoesNotExist:
                return HttpResponse('Not found', status=404)
