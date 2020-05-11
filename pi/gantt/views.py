from django.shortcuts import render, HttpResponse
from .models import tb_Tarefa
from datetime import datetime


# Create your views here.
def index_page(request):
    template_name = "gantt/index.html"

    # Coleção de dicionarios que serão retornados para a view
    json_collect = []

    # Busca dos registros em banco
    tasks = tb_Tarefa.objects.all()
    # Montagem dos dicionarios
    for task in tasks:
        gannt_retunr = {
            'id': task.trf_id,
            'name': task.trf_name,
            'start': task.trf_datainicial.strftime('%Y-%m-%d'),
            'end': task.trf_datafinal.strftime('%Y-%m-%d'),
            'progress': 100
        }
        json_collect.append(gannt_retunr)

    context = {
        'tasks': json_collect
    }

    return render(request, template_name, context)


def grafic_page(request):
    return render(request, 'gantt/grafic.html')


def register_resourse(request):
    # INdex da pagina de registro de resource
    return render(request, 'gantt/rResource.html')


def register_project(request):
    # INdex da pagina de registro de projeto
    return render(request, 'gantt/rProject.html')


def register_task(request):
    # INdex da pagina de registro de tasks
    return render(request, 'gantt/rTask.html')
