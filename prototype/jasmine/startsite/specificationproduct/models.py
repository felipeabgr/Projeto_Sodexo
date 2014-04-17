from django.db import models


class ProductSpec(models.Model):
    name = models.CharField(max_length=100)
    def __unicode__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.IntegerField(default=0)
    product_spec = models.ForeignKey(ProductSpec)
    def __unicode__(self):
        return self.name


class Feature(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=256)
    product_spec = models.ForeignKey(ProductSpec)
    def __unicode__(self):
        return self.name


class FeatureValue(models.Model):
    value = models.IntegerField(default=0)
    product = models.ForeignKey(Product)
    feature = models.ForeignKey(Feature)
