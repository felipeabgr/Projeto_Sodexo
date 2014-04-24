Ext.define('Test.spec.view.product,New', {}, function() {
    describe("View Product New Assumptions: ", function() {
        it("productNew view should exist", function() {
            var prodView = Ext.create('Prod.view.product.New',{});
            expect(model.$className).toEqual('Prod.view.product.New');
        });
    });
});