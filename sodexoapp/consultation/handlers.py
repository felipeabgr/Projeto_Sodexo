from piston.handler import BaseHandler
from consultation.models import SodexoClient
from django.core.exceptions import ObjectDoesNotExist
from django.http import HttpResponse


class SodexoClientHandler(BaseHandler):
    allow_methods = ('GET', 'POST')
    model = SodexoClient
    fields = ('name', 'cpf', 'cardNumber', 'dailyValue',
              ('user', ('username', 'password', 'email')))

    def read(self, request, id=None, start_id=None):
        try:
            return dict(result=SodexoClient.objects.all(),
                        total=SodexoClient.objects.count())
        except ObjectDoesNotExist:
            return {"error 404": "not found"}

    def create(self, request, *args, **kwargs):
        dataReceived = request.POST
        print '-----------------------------'
        print dataReceived
        print '-----------------------------'
        return HttpResponse(200)
