from rest_framework import serializers
from .models import *


class BookSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name', read_only=True)
    seller_name = serializers.CharField(source='seller.name', read_only=True)

    class Meta:
        model = Book
        fields = '__all__'