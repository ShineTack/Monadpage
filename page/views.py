from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from rest_framework import status
from .serializers import CustomerSerializer
from .models import Customer
from .bot import repeat


class CustomerViewSet(ModelViewSet):
    serializer_class = CustomerSerializer
    queryset = Customer.objects.all()


class Main(APIView):
    def get(self, request, format=None):
        return render(request, 'page/index.html')

    def post(self, request, format=None):
        serializer = CustomerSerializer(data=request.data)
        if serializer.is_valid():
            reapet(name=serializer.data['name'], phone=serializer.data['tel'],
                   email=serializer.data['email'], message=serializer.data['message'])
            serializer.save()
            #Response(status=status.HTTP_200_OK)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
