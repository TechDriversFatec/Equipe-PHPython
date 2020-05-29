from django.conf.urls import url
from django.contrib import admin
from django.views.generic import TemplateView
from . import views
admin.autodiscover()

urlpatterns = [
    url(r'request', views.index_page, name='home'),
    url(r'^$', views.index_page, name='home'),
    url(r'gantt', views.gantt, name='grafs'),

    # urls para inserção de projetos, pessoas, tarefas
    url(r'projeto/save', views.save_project, name='save_projeto'),
    url(r'tarefa/save', views.save_task, name='save_task'),
    url(r'person/save', views.save_person, name='save_person')
]
