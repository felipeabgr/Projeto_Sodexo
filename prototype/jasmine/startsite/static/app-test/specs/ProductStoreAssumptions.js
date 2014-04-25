Ext.define('Test.spec.ProductStoreAssumptions', {}, function() {
    'use strict';
    beforeEach(function() {
    });

    afterEach(function() {
    });

    describe('Prod.store.Products Store', function() {
        it('It Exists',function() {
            var prodStore = Ext.create('Prod.store.Products');
            expect(prodStore.$className).toEqual('Prod.store.Products');
        });

        it('It has the store loaded', function() {
            var prodStore = Ext.create('Prod.store.Products');
            prodStore.load();
            expect(prodStore.getCount()).toBeGreaterThan(0);

            expect(true).toBe(true);
        });

        it('1st Element', function() {
            var contact = null;
            var prodStore = Ext.create('Prod.store.Products');
            prodStore.load({
                id: 1,
                scope:this,
                callback: function(records, operation, success){
                    if(success){
                        contact = records[0];
                        expect(contact.data.id).toEqual(1);
                    }
                }
            });
            waits(1000);
            expect(contact.data.id).toEqual(1);
        });


    });

});