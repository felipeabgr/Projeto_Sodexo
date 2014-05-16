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
                dailyValeDm(balanceData.dailyVale);
                leftoverDm(balanceData.leftover);
                remainingDaysDm(balanceData.remainingDays);
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
                                       "daily_value: '10'}"+
                                       "leftover: '10.5'"+
                                       "remaining_days: '2'"+
                                "]}"
            });

            expect(idDm).toHaveBeenCalledWith(2);
            expect(dateDm).toHaveBeenCalledWith('zoio');
            expect(balanceDm).toHaveBeenCalledWith('leandroc@inatel.br');
            expect(dailyValeDm).toHaveBeenCalledWith('svcfasasdasd');
            expect(leftoverDm).toHaveBeenCalledWith('33');
            expect(remainingDaysDm).toHaveBeenCalledWith('2');
        });
    });
});