Ext.define("Test.spec.ProductControllerAssumptions", {}, function () {
    describe("Product controller", function () {
        beforeEach(function () {
            // controller's setup code is omitted
        });
        it('should exists', function () {
            var controller = Ext.create('Prod.controller.ProductController');
            expect(controller.$className).toEqual('Prod.controller.ProductController');
        });

        describe('new button', function (){
            it('new product view should exist if it have been called', function () {
                var controller = Ext.create('Prod.controller.ProductController');

                spyOn(controller, 'addProduct');

                controller.addProduct();

                expect(controller.addProduct).toHaveBeenCalled();
            });


        });
        /*describe('donateNow button', function () {
            it('calls donate on DonorInfo if form is valid', function () {
                var donorInfo = Ext.create('SSC.model.DonorInfo', {});
                var donateForm = Ext.create('SSC.view.DonateForm', {});
                var controller = Ext.create('SSC.controller.Donate');
                spyOn(donorInfo, 'donate');
                spyOn(controller, 'getDonatePanel').and.callFake(function () {
                    donateForm.down = function () {
                        return {
                            isValid: function () {
                                return true;
                            },
                            getValues: function () {
                                return {};
                            }
                        };
                    };
                    return donateForm;
                });
                spyOn(controller, 'newDonorInfo').and.callFake(function () {
                    return donorInfo;
                });
                controller.submitDonateForm();
                expect(donorInfo.donate).toHaveBeenCalled();
            });
        });*/
    });
});