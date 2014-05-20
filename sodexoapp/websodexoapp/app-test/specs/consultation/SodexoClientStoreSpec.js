describe('Store SodexoClient', function() {

    it('should exists',function() {
        var userStore = Ext.create('Sodexoapp.store.consultation.SodexoClients');
        expect(userStore.$className).toEqual('Sodexoapp.store.consultation.SodexoClients');
    });

    describe('Mocking Ajax', function() {

        beforeEach(function() {
            jasmine.Ajax.install();
        });

        afterEach(function() {
            jasmine.Ajax.uninstall();
        });

        it('should make an AJAX request to the correct URL', function() {
            var store = Ext.create('Sodexoapp.store.consultation.SodexoClients');
            store.load();

            expect(jasmine.Ajax.requests.mostRecent().url).toContain('/consultation/sodexoclient');
        });

        it('makes a REST request to test the response data', function() {
            var idFn = jasmine.createSpy("success");
            var usernameFn = jasmine.createSpy("success");
            var emailFn = jasmine.createSpy("sucess");
            var passwordFn = jasmine.createSpy("sucess");

            var store = Ext.create('Sodexoapp.store.access.Users');

            store.on('load', function(store){
                var userFake = store.data.items[0].data;
                idFn(userFake.id);
                usernameFn(userFake.username);
                emailFn(userFake.email);
                passwordFn(userFake.password);
            });

            store.load();

            var mockedRequest = jasmine.Ajax.requests.mostRecent();

            mockedRequest.response({
                status:       200,
                responseText: "{success: 'true',"+
                               "result: ["+
                                   "{"+
                                       "id: '1',"+
                                       "username: 'zoio',"+
                                       "email: 'leandroc@inatel.br',"+
                                       "password: 'svcfasasdasd'}"+
                                "]}"
            });

            expect(idFn).toHaveBeenCalledWith(1);
            expect(usernameFn).toHaveBeenCalledWith('zoio');
            expect(emailFn).toHaveBeenCalledWith('leandroc@inatel.br');
            expect(passwordFn).toHaveBeenCalledWith('svcfasasdasd');
        });
    });
});