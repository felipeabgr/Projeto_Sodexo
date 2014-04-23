Ext.define('Test.spec.ProductModelAssumptions', {}, function() {
    'use strict';
    beforeEach(function() {

    });

    afterEach(function() {
       // Ext.data.Model.cache = {};
    });

    describe('Prod.model.Product model', function() {
        it('exists', function() {
            var model = Ext.create('Prod.model.Product', {});
            expect(model.$className).toEqual('Prod.model.Product');
        });
        /*it('has properties', function() { 
            var model = Ext.create('SSC.model.Campaign', {
                title: 'Donors meeting',
                description: 'Donors meeting agenda',
                location: 'New York City'
            });
            expect(model.get('title')).toEqual('Donors meeting');
            expect(model.get('description')).toEqual('Donors meeting agenda');
            expect(model.get('location')).toEqual('New York City');
        });
        it('property title has default values', function() { 
            var model = Ext.create('SSC.model.Campaign');
            expect(model.get('title')).toEqual('Default Campaign Title');
        });
        it('requires campaign location', function() { 
            var model = Ext.create('SSC.model.Campaign');
            var validationResult = model.validate();
            expect(validationResult.isValid()).toBeFalsy();
        });*/
    });

});