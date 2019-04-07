from rest_framework import serializers
from shortener.models import Shortener

class ShortenerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shortener
        fields = ('id','slug', 'link_to',)

