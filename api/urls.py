from django.urls import path, include

from api import views
from api.views import RoomView

urlpatterns = [
    path('room', RoomView.as_view()),
]