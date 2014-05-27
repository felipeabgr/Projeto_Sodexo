from piston.handler import BaseHandler
from consultation.models import SodexoClient
from django.core.exceptions import ObjectDoesNotExist
from django.http import HttpResponse
import json


class SodexoClientHandler(BaseHandler):
    allow_methods = ('GET', 'POST')
    model = SodexoClient
    fields = ('id','name', 'cpf', 'cardNumber', 'dailyValue',
              ('user', ('id','username', 'password', 'email')))

    def read(self, request, id=None, start_id=None):
        try:
            return dict(result=SodexoClient.objects.all(),
                        total=SodexoClient.objects.count())
        except ObjectDoesNotExist:
            return {"error 404": "not found"}

    '''def create(self, request, *args, **kwargs):
        print 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
        sodexo_client = request.POST['sodexoclient']
        print sodexo_client

        created = SodexoClient.objects.create(name=sodexo_client['name'])
        #print request.POST['user']
        print 'SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS'
        print created
        return HttpResponse(200)'''

    '''def create(self, request, *args, **kwargs):
        print "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        if not self.has_model():
            print "not has model ................................"
            return HttpResponse(400)

        attrs = self.flatten_dict(request.data)
        print attrs
        try:
            inst = self.queryset(request).get(**attrs)
            print "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
            print inst
            return HttpResponse(400)
        except self.model.DoesNotExist:
            inst = self.model(**attrs)
            inst.save()
            return inst
        except self.model.MultipleObjectsReturned:
            return HttpResponse(400)'''