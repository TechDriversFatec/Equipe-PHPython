from django.shortcuts import render, HttpResponse
from .models import tb_Tarefa, tb_Projeto, tb_Pessoa
from django.views.decorators.clickjacking import xframe_options_exempt
from .forms import PostProjeto, PostTarefa, PostPessoa


# Create your views here.
def index_page(request):
    # Projetos
    projects = []
    tb_projects = tb_Projeto.objects.all()
    count_projects = len(tb_projects.order_by("prj_id"))
    if count_projects > 2:
        last_id = tb_projects.order_by("prj_id")[len(tb_projects.order_by("prj_id")) - 1]
        last_id = last_id.prj_id
    else:
        if count_projects == 0:
            last_id = 0
        else:
            last_id = tb_projects.order_by("prj_id")[len(tb_projects.order_by("prj_id")) - 1]
            last_id = last_id.prj_id

    for project in tb_projects:
        project_return = {
            'id': project.prj_id,
            'projeto': project.prj_nome,
            'start_date': project.prj_datainicio,
            'prazo': project.prj_prazoentrega,
            'color': project.prj_color
        }
        projects.append(project_return)

    # Pessoa
    pessoas = []
    tbpessoa = tb_Pessoa.objects.all()
    for pessoa in tbpessoa:
        var = {
            'codigo': pessoa.pes_id,
            'nome': pessoa.pes_nome,
            'contato': pessoa.pes_contato
        }
        pessoas.append(pessoa)
    context = {
        'projects': projects,
        'last_id': last_id,
        'pessoas': pessoas
    }
    template_name = "novo_front/index.html"
    return render(request, template_name, context)


@xframe_options_exempt
def gantt(request):
    template_name = "novo_front/gantt.html"

    json_collect = []
    tasks = tb_Tarefa.objects.all()
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
    return render(request, template_name, context)


def save_project(request):
    form = PostProjeto(request.POST)

    if form.is_valid():
        post = form.save(commit=False)
        post.save()

    return render(request, 'novo_front/index.html')


def save_task(request):
    form = PostTarefa(request.POST)

    if form.is_valid():
        post = form.save(commit=False)
        post.save()

    return render(request, 'novo_front/index.html')


def save_person(request):
    form = PostPessoa(request.POST)
    if form.is_valid():
        post = form.save(commit=False)
        post.save()
    return render(request, 'novo_front/index.html')