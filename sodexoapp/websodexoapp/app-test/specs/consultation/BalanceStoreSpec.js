describe('Balance Store', function() {

    it('should exists',function() {
        var userStore = Ext.create('Sodexoapp.store.consultation.Balances');
        expect(userStore.$className).toEqual('Sodexoapp.store.consultation.Balances');
    });

    describe('Mocking Ajax', function() {

        beforeEach(function() {
            jasmine.Ajax.install();
        });

        afterEach(function() {
            jasmine.Ajax.uninstall();
        });

        it('should make a request to the correct URL', function() {
            var store = Ext.create('Sodexoapp.store.consultation.Balances');
            store.load();

            expect(jasmine.Ajax.requests.mostRecent().url).toContain('/consultation/balance');
        });

        it('should return the correct JSON into the response data', function() {
            var idDm = jasmine.createSpy("success");
            var dateDm = jasmine.createSpy("success");
            var balanceDm = jasmine.createSpy("sucess");
            var dailyValeDm = jasmine.createSpy("sucess");
            var leftoverDm = jasmine.createSpy("sucess");
            var remainingDaysDm = jasmine.createSpy("sucess");

            var store = Ext.create('Sodexoapp.store.consultation.Balances');

            store.on('load', function(store){
                var balanceData = store.data.items[0].data;
                idDm(balanceData.id);
                dateDm(balanceData.date);
                balanceDm(balanceData.balance);
                dailyValeDm(balanceData.daily_value);
                leftoverDm(balanceData.leftover);
                remainingDaysDm(balanceData.remaining_days);
            });

            store.load();

            var mockedRequest = jasmine.Ajax.requests.mostRecent();

            mockedRequest.response({
                status:       200,
                responseText: "{success: 'true',"+
                               "result: ["+
                                   "{"+
                                       "id: '1',"+
                                       "date: '2014-5-15',"+
                                       "balance: '300.0',"+
                                       "daily_value: '10',"+
                                       "leftover: '10.5',"+
                                       "remaining_days: '2'}"+
                                "]}"
            });

            expect(idDm).toHaveBeenCalledWith(1);
            expect(dateDm).toHaveBeenCalledWith(new Date('2014/5/15'));
            expect(balanceDm).toHaveBeenCalledWith(300.0);
            expect(dailyValeDm).toHaveBeenCalledWith(10);
            expect(leftoverDm).toHaveBeenCalledWith(10.5);
            expect(remainingDaysDm).toHaveBeenCalledWith(2);
        });

        it('should return empty JSON when the response has the property success with false value', function() {
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
        });
    });
});