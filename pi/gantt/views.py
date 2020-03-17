from django.shortcuts import render, HttpResponse


# Create your views here.
def index_page(request):
    return render(request, "gantt/index.html")


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
