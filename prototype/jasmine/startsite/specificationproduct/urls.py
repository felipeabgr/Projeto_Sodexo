from django.conf.urls import patterns, url

from specificationproduct import views

urlpatterns = patterns('',
    url(r'^$', views.index, name='index')
)
