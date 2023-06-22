from rest_framework.decorators import api_view
from rest_framework.response import Response 
from .models import *
from .serializers import *


@api_view(['GET'])
def ApiOverView(request):
    api_urls = {
        'GET /api/': 'Api overview',
        'GET /api/books/': 'get all the listed books', 
        'POST /api/books/add/': 'add a new book'
    }
    return Response(api_urls)


@api_view(['GET'])
def GetBooks(request):
    books = Book.objects.all().order_by('id').reverse()
    serializer = BookSerializer(books, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def AddBooks(request):
    name = request.data.get('name')
    author = request.data.get('author')
    price = request.data.get('price')

    seller = request.data.get('seller')
    seller_id = Seller.objects.get(name=seller)
    category = request.data.get('category')
    category_id = Category.objects.get(name=category)
    image = request.FILES.get('image')
    
    book = Book.objects.create(
        name = name,
        author = author,
        price = price,
        seller = seller_id,
        category = category_id,
        image = image
    )
    book.save()

    return Response({'message': 'Book added successfully!'})