# Generated by Django 3.2.12 on 2022-06-03 09:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('studentApp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='body',
            field=models.TextField(max_length=100),
        ),
    ]