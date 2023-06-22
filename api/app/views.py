from rest_framework.decorators import api_view
from rest_framework.response import Response 


@api_view(['GET'])
def ApiOverView(request):
    api_urls = {
        '/api': 'Testing connection with frontend', 
    }
    return Response(api_urls)
