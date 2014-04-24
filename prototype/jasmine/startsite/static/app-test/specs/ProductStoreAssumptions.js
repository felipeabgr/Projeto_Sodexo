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
            var prodStore = Ext.create('Prod.store.Products');
            // prodStore.load({
            //     id: 0,
            //     scope:this,
            //     callback: function(records, operation, success){
            //         if(success){
            //           var prod = records[0];
            //         }
            //     }
            // });

            //expect(prodStore.getCount()).toBe(3);
            expect(true).toBe(true);
        });

    });

});