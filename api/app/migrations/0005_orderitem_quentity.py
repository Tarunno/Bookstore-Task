# Generated by Django 4.2 on 2023-06-22 19:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_order_orderitem'),
    ]

    operations = [
        migrations.AddField(
            model_name='orderitem',
            name='quentity',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
    ]