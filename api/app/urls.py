from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import *

urlpatterns = [
    
    path('', ApiOverView, name='api_overview'),
    path('books/', GetBooks, name='get_books')

]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
