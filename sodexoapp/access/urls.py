# coding=utf-8
from django.conf.urls import *
from piston.resource import Resource

from access import handlers

user_handler = Resource(handlers.UserHandler)

urlpatterns = patterns('',
    url(r'login', 'access.views.do_login'),
    url(r'logout', 'access.views.do_logout'),
    url(r'^user$', user_handler),
)
