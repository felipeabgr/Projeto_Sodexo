from django.conf.urls.defaults import *

#from access import views

urlpatterns += patterns('',
    url(r'login', 'access.views.do_login'),
    url(r'logout', 'access.views.do_logout')
)
