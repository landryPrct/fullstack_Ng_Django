# Generated by Django 3.2.12 on 2022-06-03 09:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('studentApp', '0002_alter_post_body'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='body',
            field=models.TextField(),
        ),
    ]