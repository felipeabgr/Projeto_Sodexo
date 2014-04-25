describe("View Product New Assumptions: ", function() {
    it("productNew view should exist", function() {
        var prodView = Ext.create('Prod.view.product.New',{});
        expect(prodView.$className).toEqual('Prod.view.product.New');
    });
});