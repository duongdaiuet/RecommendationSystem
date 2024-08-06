from django.urls import path, re_path
from .views import MBBankView
app_name = 'viewapp'
urlpatterns = [
    path('view/', MBBankView, name='MBBankView'),
]
