# coding=utf-8
from django.conf.urls import *

from access import views

urlpatterns = patterns('',
    url(r'login', 'access.views.do_login'),
    url(r'logout', 'access.views.do_logout'),
    url(r'^email', views.email, name = 'email')
)
