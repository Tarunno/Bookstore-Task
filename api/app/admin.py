from django.contrib import admin
from .models import *

admin.site.register(Category)
admin.site.register(Seller)
admin.site.register(Book)
admin.site.register(Order)
admin.site.register(OrderItem)