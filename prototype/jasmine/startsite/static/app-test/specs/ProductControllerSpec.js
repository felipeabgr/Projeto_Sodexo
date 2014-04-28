describe("Product controller", function () {
    it('should exists', function () {
        var controller = Ext.create('Prod.controller.ProductController');
        expect(controller.$className).toEqual('Prod.controller.ProductController');
    });

    describe('New button', function (){
        it('new product view should exist if it have been called', function () {
            var controller = Ext.create('Prod.controller.ProductController');

            spyOn(controller, 'addProduct');
            controller.addProduct();
            expect(controller.addProduct).toHaveBeenCalled();
        });
    });
});