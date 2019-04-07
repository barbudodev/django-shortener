from rest_framework import viewsets
from shortener.models import Shortener
from .serializers import ShortenerSerializer

class ShortenerViewSet(viewsets.ModelViewSet):
    serializer_class = ShortenerSerializer
    queryset = Shortener.objects.all()