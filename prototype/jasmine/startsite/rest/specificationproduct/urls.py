from django.conf.urls import *
from piston.resource import Resource
from rest.specificationproduct.handlers import *


product_handler = Resource(ProductHandler)
product_feature_values_handler = Resource(ProductFeatureValuesHandler)

urlpatterns = patterns('',
    url(r'^product/(?P<id>[0-9]+)/feature-value/?$', product_feature_values_handler),
    url(r'^product/(?P<id>[^/]+)/', product_handler),
    url(r'^product/', product_handler),
)
