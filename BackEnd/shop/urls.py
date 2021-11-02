from django.urls import path, include
from .views import ProductApiview, ProductDetail
from rest_framework.routers import DefaultRouter


# router = DefaultRouter()
# router.register('Products', ProductApiview.as_view())

urlpatterns = [
    path('', ProductApiview.as_view()),
    path('<int:id>/', ProductDetail.as_view()),
]
