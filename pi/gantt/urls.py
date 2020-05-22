from django.conf.urls import url
from django.contrib import admin
from django.views.generic import TemplateView
from . import views
admin.autodiscover()

urlpatterns = [
    url(r'request', views.index_page, name='home'),
    url(r'^$', views.index_page, name='home'),
    url(r'gantt', views.gantt, name='grafs')
]
