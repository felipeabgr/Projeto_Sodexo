# coding=utf-8
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth import get_user_model
User = get_user_model()

from piston.handler import BaseHandler


class UserHandler(BaseHandler):
    allowed_methods = ('GET',)
    model = User

    def read(self, request, id=None, start_id=None):
        if id:
            try:
                return User.objects.get(id=id)
            except ObjectDoesNotExist:
                return {"error 404": "not found"}
        else:
            try:
                return dict (result=User.objects.all(), total=User.objects.count())
            except ObjectDoesNotExist:
                return {"error 404": "not found"}