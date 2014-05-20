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

        it('should make a request to the correct URL', function() {
            var store = Ext.create('Sodexoapp.store.consultation.SodexoClients');
            store.load();

            expect(jasmine.Ajax.requests.mostRecent().url).toContain('/consultation/sodexoclient');
        });

        it('should return the correct JSON into the response data', function() {
            var idDm = jasmine.createSpy("success");
            var cpfDm = jasmine.createSpy("success");
            var sodexoCardDm = jasmine.createSpy("sucess");

            var store = Ext.create('Sodexoapp.store.consultation.SodexoClients');

            store.on('load', function(store){
                var sodexoclientFake = store.data.items[0].data;
                idDm(sodexoclientFake.id);
                cpfDm(sodexoclientFake.username);
                sodexoCardDm(sodexoclientFake.email);
            });

            store.load();

            var mockedRequest = jasmine.Ajax.requests.mostRecent();

            mockedRequest.response({
                status:       200,
                responseText: "{success: 'true',"+
                               "result: ["+
                                   "{"+
                                       "id: '1',"+
                                       "cpf: '04861516625',"+
                                       "sodexo_card: '6598264110258',"+
                                "]}"
            });

            expect(idDm).toHaveBeenCalledWith(1);
            expect(cpfDm).toHaveBeenCalledWith('zoio');
            expect(sodexoCardDm).toHaveBeenCalledWith('leandroc@inatel.br');
        });

        /*it('should return empty JSON when the response has the property success with false value', function() {
            var dataLength = jasmine.createSpy("success");

            var store = Ext.create('Sodexoapp.store.consultation.Balances');

            store.on('load', function(store){
                dataLength(store.data.length);
            });

            store.load();

            var mockedRequest = jasmine.Ajax.requests.mostRecent();

            mockedRequest.response({
                status:       200,
                responseText: "{success: 'false',"+
                               "result: []}"
            });

            expect(dataLength).toHaveBeenCalledWith(0);
        });*/
    });
});