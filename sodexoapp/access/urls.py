from django.conf.urls import patterns, url

from access import views

urlpatterns = patterns('',
    url(r'^$', views.index, name='index')
)
