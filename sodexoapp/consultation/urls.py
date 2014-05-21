# coding=utf-8
from django.conf.urls import *
from piston.resource import Resource
from consultation import handlers

sodexo_client_handler = Resource(handlers.SodexoClientHandler)

urlpatterns = patterns('',
    url(r'^sodexoclient$', sodexo_client_handler),
)