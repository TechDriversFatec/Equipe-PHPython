from django.conf.urls import url
from django.contrib import admin
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    url(r'^$', views.index_page, name='home'),
    url('register_resource', views.register_resourse, name='registerResource'),
    url('register_project', views.register_project, name='registerProject'),
    url('register_task', views.register_task, name='registerTask')
]