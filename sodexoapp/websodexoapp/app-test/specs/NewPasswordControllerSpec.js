describe('Controller User', function() {
    var ctr;
    var view;

    beforeEach(function () {
        view = Ext.create('Sodexoapp.view.access.NewPassword');
        ctr = Ext.create('Sodexoapp.controller.access.NewPassword');
    });

    afterEach(function() {
    });

    it('should exist', function () {
        expect(ctr.$className).toEqual('Sodexoapp.controller.access.NewPassword');
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

describe('Mocking Ajax controller calls', function() {

    beforeEach(function() {
        jasmine.Ajax.install();
    });

    afterEach(function() {
        jasmine.Ajax.uninstall();
    });

    it('should make an AJAX request to the correct URL', function() {
        debugger;
        var controller = Ext.create('Sodexoapp.controller.access.NewPassword');
        controller.defineNewPassword(1);

        expect(jasmine.Ajax.requests.mostRecent().url).toContain('/access/userauthentication/1');
    });

    it('makes a Ajax request to recover the user password', function() {
            var controller = Ext.create('Sodexoapp.controller.access.NewPassword');
            controller.defineNewPassword(1);

            var countFn = jasmine.createSpy("success");

            var store = Ext.create('Sodexoapp.store.access.Users');

            store.on('load', function(store){
                countFn(store.data.length);
            });

            store.load();

            var mockedRequest = jasmine.Ajax.requests.mostRecent();

            mockedRequest.response({
                status:       200,
                responseText: "{success: 'true',"+
                               "users: ["+
                                   "{"+
                                       "id: '1',"+
                                       "username: 'zoio',"+
                                       "email: 'leandroc@inatel.br',"+
                                       "password: 'svcfasasdasd'},"+
                                   "{"+
                                       "id: '2',"+
                                       "username: 'corvo',"+
                                       "email: 'felipe.douglas@inatel.br',"+
                                       "password: 'fkfkfkfkfkfkfk'}"+
                                "]}"
            });

            expect(countFn).toHaveBeenCalledWith(2);
        });
});