from rest_framework.serializers import ModelSerializer
from rest_framework_extensions.mixins import NestedViewSetMixin
from .models import Customer


class CustomerSerializer(NestedViewSetMixin, ModelSerializer):
    class Meta:
        model = Customer
        fields = ('id', 'name', 'tel', 'email', 'message')
