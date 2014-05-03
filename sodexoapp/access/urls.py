# coding=utf-8
from django.conf.urls.defaults import *


urlpatterns = patterns('',
    url(r'login', 'access.views.do_login'),
    url(r'logout', 'access.views.do_logout')
)
