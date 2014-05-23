from piston.handler import BaseHandler
from consultation.models import SodexoClient
from django.core.exceptions import ObjectDoesNotExist


class SodexoClientHandler(BaseHandler):
    allow_methods = ('GET',)
    model = SodexoClient
    fields = ('user', 'name', 'cpf', 'cardNumber', 'dailyValue')

    def read(self, request, id=None, start_id=None):
        try:
            return dict(result=SodexoClient.objects.all(),
                total=SodexoClient.objects.count())
        except ObjectDoesNotExist:
            return {"error 404": "not found"}
