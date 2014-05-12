describe('Controller User', function() {
    var controller;
    var view;

    beforeEach(function () {
        controller = Ext.create('Sodexoapp.controller.User');
        //view = Ext.create('Sodexoapp.view.NewPassword');
    });

    afterEach(function() {
    });

    it('should exist', function () {
        expect(controller.$className).toEqual('Sodexoapp.controller.User');
    });

    it('should ref MyView', function() {
        var myView = controller.getMyView();

        expect(myView).toBeDefined();
    });

    it('should ref MyView button Verify', function() {
        var btnVerify = controller.getMyViewButtonVerify();

        expect(btnVerify.text).toBe('Verificar Email');
    });

    it('verifyEmail method should should be called if it exist', function () {
        spyOn(controller, 'verifyEmail');
        controller.verifyEmail();
        expect(controller.verifyEmail).toHaveBeenCalled();
    });

});