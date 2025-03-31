from django.apps import apps
from django.contrib import admin
from django import forms

app = apps.get_app_config("Medias")

for model_name, model in app.models.items():
    if model not in admin.site._registry:
        admin.site.register(model)
