Ext.define('Test.spec.ProductStoreAssumptions', {}, function() {
    'use strict';
    beforeEach(function() {
    });

    afterEach(function() {
    });

    describe('Prod.store.Products Store', function() {
        it('It has the store loaded', function() {
            /*var prodStore = Ext.create('Ext.data.Store', {
                 autoLoad: true,
                 model: "Prod.model.Product",
                 proxy: {
                    type: 'ajax',
                    url: '/static/data/products.json',

                    reader: {
                        type: 'json',
                        root: 'products',
                        successProperty: 'success'
                    }

                }
            });*/
            var prodStore = Ext.getStore('Prod.store.Products');
            console.log(prodStore);
            expect(prodStore.getCount()).toBe(3);
            expect(true).toBe(true);
        });

    });

});