Ext.define('Test.spec.ProductModelAssumptions', {}, function() {
    'use strict';
    beforeEach(function() {

    });

    afterEach(function() {
        Ext.data.Model.cache = {};
    });

    describe('Prod.model.Product model', function() {
        it('Exists', function() {
            var model = Ext.create('Prod.model.Product', {});
            expect(model.$className).toEqual('Prod.model.Product');
        });

        it('Has properties', function() {
            var model = Ext.create('Prod.model.Product', {
                name: 'Product Test 1',
                price: 25.5
            });
            expect(model.get('name')).toEqual('Product Test 1');
            expect(model.get('price')).toEqual(25.5);
        });

        it('Property description has default values', function() {
            var model = Ext.create('Prod.model.Product');
            expect(model.get('description')).toEqual('Default description');
        });

        it('Requires product name', function() {
            var model = Ext.create('Prod.model.Product');
            var validationResult = model.validate();
            expect(validationResult.isValid()).toBeFalsy();
        });
    });

});