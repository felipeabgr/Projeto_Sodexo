from specificationproduct.models import *
from piston.handler import BaseHandler
from django.core.exceptions import ObjectDoesNotExist


class CsrfExemptBaseHandler(BaseHandler):

    def flatten_dict(self, dct):
        if 'csrfmiddlewaretoken' in dct:
            dct = dct.copy()
            del dct['csrfmiddlewaretoken']
        return super(CsrfExemptBaseHandler, self).flatten_dict(dct)


class ProductHandler(CsrfExemptBaseHandler):
    allowed_methods = ('GET',)
    model = Product
    fields = ('id', 'name', 'price', 'product_spec')

    def read(self, request, id=None, start_id=None):
        if id:
            try:
                return Product.objects.get(id=id)
            except ObjectDoesNotExist:
                return {"error 404": "not found"}
        else:
            try:
                return Product.objects.all()
            except ObjectDoesNotExist:
                return {"error 404": "not found"}


class ProductFeatureValuesHandler(CsrfExemptBaseHandler):
    allowed_methods = ('GET',)
    model = FeatureValue
    fields = ('id', 'value', 'feature')

    def read(self, request, id=None, start_id=None):
        if id:
            try:
                return FeatureValue.objects.filter(product__pk=id)
            except ObjectDoesNotExist:
                return {"error 404": "not found"}
        else:
            return {"error 400": "bad request"}
