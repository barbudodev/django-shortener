from django.shortcuts import render, HttpResponse, get_object_or_404
from .models import Shortener

# Create your views here.
def index(request):
    template_name = 'shortener/index.html'
    return render(request, template_name)

def linkpage(request, slug):
    template_name = 'shortener/linkpage.html'
    shortener = get_object_or_404(Shortener, slug=slug)
    context = {'shortener': shortener}

    return render(request, template_name, context)