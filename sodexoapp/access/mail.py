from django.core.mail import send_mail
from smtplib import *


def send_generic_mail(subject, message, to):
    try:
        a = send_mail(subject, message, "tiagoh@inatel.br", to,
                                                        fail_silently=False)
    except SMTPException:
        return "erro smtp"
    return a
