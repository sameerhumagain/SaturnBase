# Generated by Django 5.1.6 on 2025-03-27 12:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Medias', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='medias',
            old_name='alt_text',
            new_name='altText',
        ),
        migrations.AddField(
            model_name='medias',
            name='description',
            field=models.TextField(default=1),
            preserve_default=False,
        ),
    ]
