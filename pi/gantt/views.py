from django.shortcuts import render, HttpResponse
from .models import tb_Tarefa
from datetime import datetime
from django.views.decorators.clickjacking import xframe_options_exempt
from .forms import PostProjeto
from django.shortcuts import redirect


# Create your views here.
def index_page(request):
    template_name = "novo_front/index.html"
    return render(request, template_name)


@xframe_options_exempt
def gantt(request):
    template_name = "novo_front/gantt.html"
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
        'tasks': json_collect,
    }
    return render(request, template_name)


def save_project(request):
    form = PostProjeto(request.POST)

    if form.is_valid():
        post = form.save(commit=False)
        post.save()

    return render(request, 'novo_front/index.html')
