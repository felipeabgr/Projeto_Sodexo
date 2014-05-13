describe('Controller User', function() {
    var ctr;
    var view;

    beforeEach(function () {
        view = Ext.create('Sodexoapp.view.NewPassword');
        ctr = Ext.create('Sodexoapp.controller.User');
    });

    afterEach(function() {
    });

    it('should exist', function () {
        expect(ctr.$className).toEqual('Sodexoapp.controller.User');
    });

    it('should ref MyView', function() {
        var myView = ctr.getMyView();
        expect(myView).toBeDefined();
    });

    it('should ref MyView button send', function() {
        var btnsend = ctr.getMySendButton();
        expect(btnsend.text).toBe('Enviar');
    });

    it('sendEmail method should be called if it exist', function () {
        spyOn(ctr, 'sendEmail');
        ctr.sendEmail();
        expect(ctr.sendEmail).toHaveBeenCalled();
    });
});