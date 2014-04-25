describe('Product model', function() {
    beforeEach(function() {

    });

    afterEach(function() {
        Ext.data.Model.cache = {};
    });

    it('exists', function() {
        var model = Ext.create('Prod.model.Product', {});
        expect(model.$className).toEqual('Prod.model.Product');
    });

    it('has properties', function() {
        var model = Ext.create('Prod.model.Product', {
            name: 'Product Test 1',
            price: 25.5
        });
        expect(model.get('name')).toEqual('Product Test 1');
        expect(model.get('price')).toEqual(25.5);
    });

    it('property description has default values', function() {
        var model = Ext.create('Prod.model.Product');
        expect(model.get('description')).toEqual('Default description');
    });

    it('requires product name', function() {
        var model = Ext.create('Prod.model.Product');
        var validationResult = model.validate();
        expect(validationResult.isValid()).toBeFalsy();
    });
});