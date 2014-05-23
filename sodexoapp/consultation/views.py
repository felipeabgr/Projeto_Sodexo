# encoding: utf-8
from django.http import HttpResponse, \
                        HttpResponseBadRequest, \
                        HttpResponseNotAllowed

from consultation.models import SodexoClient
import requests

CAPTCHA_URL = 'https://sodexosaldocartao.com.br/saldocartao/jcaptcha.do'
POST_URL = 'https://sodexosaldocartao.com.br/saldocartao/consultaSaldo.do?operation=consult'


def getCaptcha(request):
    session = requests.Session()

    r = session.get(CAPTCHA_URL)

    request.session['testename'] = session.cookies['JSESSIONID']


    return HttpResponse(r.content)


def calculate_balance(request):
    if request.method not in ('POST'):
        return HttpResponseNotAllowed(
            ("Erro: Esta funcionalidade aceita\
             apenas os métodos POST"))

    data = request.__getattribute__(request.method)

    if not data:
        return HttpResponseBadRequest(
            ("Erro: Os parâmetros enviados estão incorretos"))

    user_id = data.get('user_id')
    captcha_text = data.get('captcha_text')


    if not user_id or not captcha_text:
        return HttpResponseBadRequest(
            ("Erro: Os parâmetros enviados estão incorretos"))

    sodexo_client = SodexoClient.objects.get(user=user_id)


    post_data = {
                'service': '5;1;6',
                'cardNumber': sodexo_client.cardNumber,
                'cpf': sodexo_client.cpf,
                'jcaptcha_response': captcha_text,
                'x': '6',
                'y': '9',
            }

    cookie = {'JSESSIONID': request.session.cookies['JSESSIONID']}

    r = request.post(POST_URL, params=post_data, cookies=cookie)

    soup = BeautifulSoup(r.content)

    print "-------------------"

    for link in soup.find_all(id='balance'):
        balance = link.find('var')
        print balance.string
        print "end"

    response = HttpResponse(data, content_type='application/vnd.ms-excel')

    return response
