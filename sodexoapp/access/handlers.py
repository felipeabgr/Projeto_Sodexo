# coding=utf-8
from django.contrib.auth import get_user_model
User = get_user_model()

from piston.handler import BaseHandler


class UserHandler(BaseHandler):
    allowed_methods = ('GET',)
    model = User
