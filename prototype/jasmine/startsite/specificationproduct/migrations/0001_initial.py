# -*- coding: utf-8 -*-
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding model 'FeatureValue'
        db.create_table(u'specificationproduct_featurevalue', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('value', self.gf('django.db.models.fields.IntegerField')(default=0)),
        ))
        db.send_create_signal(u'specificationproduct', ['FeatureValue'])

        # Adding model 'Product'
        db.create_table(u'specificationproduct_product', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('name', self.gf('django.db.models.fields.CharField')(max_length=100)),
            ('price', self.gf('django.db.models.fields.IntegerField')(default=0)),
            ('feature_value', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['specificationproduct.FeatureValue'])),
        ))
        db.send_create_signal(u'specificationproduct', ['Product'])

        # Adding model 'Feature'
        db.create_table(u'specificationproduct_feature', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('name', self.gf('django.db.models.fields.CharField')(max_length=100)),
            ('description', self.gf('django.db.models.fields.CharField')(max_length=256)),
            ('feature_value', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['specificationproduct.FeatureValue'])),
        ))
        db.send_create_signal(u'specificationproduct', ['Feature'])

        # Adding model 'ProductSpec'
        db.create_table(u'specificationproduct_productspec', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('name', self.gf('django.db.models.fields.CharField')(max_length=100)),
            ('product', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['specificationproduct.Product'])),
            ('feature', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['specificationproduct.Feature'])),
        ))
        db.send_create_signal(u'specificationproduct', ['ProductSpec'])


    def backwards(self, orm):
        # Deleting model 'FeatureValue'
        db.delete_table(u'specificationproduct_featurevalue')

        # Deleting model 'Product'
        db.delete_table(u'specificationproduct_product')

        # Deleting model 'Feature'
        db.delete_table(u'specificationproduct_feature')

        # Deleting model 'ProductSpec'
        db.delete_table(u'specificationproduct_productspec')


    models = {
        u'specificationproduct.feature': {
            'Meta': {'object_name': 'Feature'},
            'description': ('django.db.models.fields.CharField', [], {'max_length': '256'}),
            'feature_value': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['specificationproduct.FeatureValue']"}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '100'})
        },
        u'specificationproduct.featurevalue': {
            'Meta': {'object_name': 'FeatureValue'},
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'value': ('django.db.models.fields.IntegerField', [], {'default': '0'})
        },
        u'specificationproduct.product': {
            'Meta': {'object_name': 'Product'},
            'feature_value': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['specificationproduct.FeatureValue']"}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            'price': ('django.db.models.fields.IntegerField', [], {'default': '0'})
        },
        u'specificationproduct.productspec': {
            'Meta': {'object_name': 'ProductSpec'},
            'feature': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['specificationproduct.Feature']"}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            'product': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['specificationproduct.Product']"})
        }
    }

    complete_apps = ['specificationproduct']