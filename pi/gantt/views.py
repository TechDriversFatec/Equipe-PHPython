from django.shortcuts import render, HttpResponse
from .models import tb_Tarefa
from datetime import datetime
from django.views.decorators.clickjacking import xframe_options_exempt

# Create your views here.
def index_page(request):
    template_name = "novo_front/index.html"

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

@xframe_options_exempt
def gantt(request):
    template_name = "novo_front/gantt.html"
    return render(request, template_name)
