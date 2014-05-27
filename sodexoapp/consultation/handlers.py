from piston.handler import BaseHandler
from consultation.models import SodexoClient
from django.core.exceptions import ObjectDoesNotExist
from django.http import HttpResponse
from django.contrib.auth import get_user_model
User = get_user_model()



class SodexoClientHandler(BaseHandler):
    allow_methods = ('GET', 'POST')
    model = SodexoClient
    fields = ('id','name', 'cpf', 'cardNumber', 'dailyValue',
              ('user', ('id','username', 'email')))

    def read(self, request, id=None, start_id=None):
        try:
            return dict(result=SodexoClient.objects.all(),
                        total=SodexoClient.objects.count())
        except ObjectDoesNotExist:
            return {"error 404": "not found"}

    def create(self, request, *args, **kwargs):
        if not self.has_model():
            return HttpResponse(400)

        try:
            attrs = request.data
            user_data = attrs['user']

            user = User()
            user.username = user_data['username']
            user.set_password = user_data['password']
            user.email = user_data['email']
            user.save()

            sodexo_client = SodexoClient()
            sodexo_client.user = user
            sodexo_client.name = attrs['name']
            sodexo_client.cpf = attrs['cpf']
            sodexo_client.cardNumber = attrs['cardNumber']
            sodexo_client.dailyValue = attrs['dailyValue']
            sodexo_client.save()

            return {'result': sodexo_client}
        except Exception, e:
            resp = HttpResponse()
            resp.status_code = 400
            resp.write(e.msg)
            return resp
