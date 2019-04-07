from rest_framework.routers import DefaultRouter
from .shortener import views as shortener_views

router = DefaultRouter()
router.register('shortener', shortener_views.ShortenerViewSet, base_name='shortener')

urlpatterns = router.urls