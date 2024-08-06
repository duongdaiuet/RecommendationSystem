from django.http import HttpResponse
from django.template import loader
from django.core.paginator import Paginator
from django.contrib.auth.decorators import login_required
import sys
import os
import json
from django.shortcuts import render

# Create your views here.
def MBBankView(request, *args, **kwargs):
    context = {}
    template = loader.get_template(str('index.html'))
    context['view'] = 1

    result = HttpResponse(template.render(context, request))
    return result