from django.contrib import admin
from specificationproduct.models import Feature, FeatureValue
from specificationproduct.models import Product, ProductSpec


class FeatureInLine(admin.StackedInline):
    model = Feature
    extra = 1


class ProductSpecAdmin(admin.ModelAdmin):
    fieldsets = [
        (None, {'fields': ['name']})
    ]
    inlines = [FeatureInLine]


class FeatureValueInLine(admin.StackedInline):
    fieldsets = [
        ('Valor das Features', {'fields': ['value', 'feature']})
    ]
    verbose_name_plural = 'Lista de Features Values'
    model = FeatureValue
    extra = 2


class ProductAdmin(admin.ModelAdmin):
    fieldsets = [
        ('Valores Basicos', {'fields': ['name', 'price', 'product_spec']})]
    inlines = [FeatureValueInLine]
    list_display = ('name', 'price', 'product_spec')

admin.site.register(ProductSpec, ProductSpecAdmin)
admin.site.register(Product, ProductAdmin)
