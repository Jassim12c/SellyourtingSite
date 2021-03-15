from django.urls import path
from . import views

app_name = 'sell'

urlpatterns = [
    path("", views.MainPageView.as_view(), name='sell'),
]
