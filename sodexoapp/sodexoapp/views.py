from django.shortcuts import render

def recover_password(request):
    return render(request, 'pwrecover.html', content_type='text/html')
