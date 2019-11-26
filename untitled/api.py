from rest_framework.routers import DefaultRouter
from rest_framework_extensions.routers import NestedRouterMixin
from page.views import CustomerViewSet


class NestedDefaultRouter(NestedRouterMixin, DefaultRouter):
    pass


router = NestedDefaultRouter()

router.register('customers', CustomerViewSet)
