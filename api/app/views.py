from rest_framework.decorators import api_view
from rest_framework.response import Response 
from .models import *
from .serializers import *


@api_view(['GET'])
def ApiOverView(request):
    api_urls = {
        'GET /api': 'Api overview',
        'GET /api/books': 'get all the listed books', 
    }
    return Response(api_urls)


@api_view(['GET'])
def GetBooks(request):
    books = Book.objects.all()
    serializer = BookSerializer(books, many=True)
    return Response(serializer.data)