# encoding: utf-8
from django.http import HttpResponse, \
                        HttpResponseBadRequest, \
                        HttpResponseNotAllowed

from consultation.models import SodexoClient
from bs4 import BeautifulSoup
import requests
import json
import time
from decimal import *


CAPTCHA_URL = 'https://sodexosaldocartao.com.br/saldocartao/jcaptcha.do'
POST_URL = 'https://sodexosaldocartao.com.br/saldocartao/consultaSaldo.do?operation=consult'


def getCaptcha(request):
    session = requests.Session()
    r = session.get(CAPTCHA_URL)
    request.session['JSESSIONID'] = session.cookies['JSESSIONID']
    return HttpResponse(r.content)


def calculate_balance(request):
    if request.method not in ('POST'):
        return HttpResponseNotAllowed(
            ("Erro: Esta funcionalidade aceita\
             apenas os métodos POST"))

    jsonData = json.loads(request.body)

    if not jsonData:
        return HttpResponseBadRequest(
            ("Erro: Os parâmetros enviados estão incorretos"))

    user_id = jsonData['user_id']
    captcha_text = jsonData['captcha_text']

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

    cookie = {'JSESSIONID': request.session['JSESSIONID']}

    r = requests.post(POST_URL, params=post_data, cookies=cookie)

    soup = BeautifulSoup(r.content)
    clientBalance = None

    for link in soup.find_all(id='balance'):
        balance = link.find('var')
        clientBalance = Decimal(balance.string.split( )[2])

    remaining_days = 0
    leftover = 0

    if clientBalance > sodexo_client.dailyValue:
        remaining_days = int(clientBalance / sodexo_client.daily_value)
        leftover = clientBalance % sodexo_client.daily_value
    else:
        leftover = clientBalance

    balance_result = {
        "date": time.strftime("%d/%m/%Y"),
        "balance": str(clientBalance),
        "daily_value": str(sodexo_client.dailyValue),
        "remaining_days": str(remaining_days),
        "leftover": str(leftover)
    }

    response = HttpResponse(json.dumps(balance_result), content_type="text/html")

    return response
