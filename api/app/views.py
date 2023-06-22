from rest_framework.decorators import api_view
from rest_framework.response import Response 
from .models import *
from .serializers import *


@api_view(['GET'])
def ApiOverView(request):
    api_urls = {
        'GET /api/': 'Api overview',
        'GET /api/books/': 'get all the listed books', 
        'POST /api/books/add/': 'add a new book',
        'POST /api/books/filter/': 'filter books',
        'POST /api/order/': 'place order'
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


@api_view(['POST'])
def FilterBooks(request):
    books = Book.objects.all()

    starting_price = request.data.get('starting_price')
    ending_price = request.data.get('ending_price')
    category = request.data.get('category')
    seller = request.data.get('seller')

    if starting_price: books = filter(lambda x: x.price >= float(starting_price), books)
    if ending_price: books = filter(lambda x: x.price <= float(ending_price), books)

    if category and category != 'All': 
        category = Category.objects.get(name=category)
        books = filter(lambda x: x.category == category, books)

    if seller and seller != 'All': 
        seller = Seller.objects.get(name=seller)
        books = filter(lambda x: x.seller == seller, books)
        
    serializer = BookSerializer(books, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def PlaceOrder(request):
    cart = request.data.get('cart')
    total_item = request.data.get('total_item')
    total_price = request.data.get('total_price')

    order = Order.objects.create(
        total_item = total_item,
        total_price = total_price
    )
    
    for item in cart:
        book = Book.objects.get(id=item['id'])
        orderItem = OrderItem.objects.create(order=order, book=book, quentity=item['quentity'])
        orderItem.save()

    order.save()
        
    return Response({'message': 'Order placed!'})