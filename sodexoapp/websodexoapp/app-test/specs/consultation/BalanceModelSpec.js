describe('Model Balance', function(){

    it('exists', function() {
        var model = Ext.create('Sodexoapp.model.consultation.Balance', {});
        expect(model.$className).toEqual('Sodexoapp.model.consultation.Balance');
    });

    it('has properties', function() {
        var model = Ext.create('Sodexoapp.model.consultation.Balance', {
            date:'03/13/2014',
            balance:'123456',
            daily_value:'20',
            remaining_days:'5',
            leftover:'100'

        });
        expect(model.get('date')).toEqual(new Date('03/13/2014'));
        expect(model.get('balance')).toEqual(123456);
        expect(model.get('daily_value')).toEqual(20);
        expect(model.get('remaining_days')).toEqual(5);
        expect(model.get('leftover')).toEqual(100);
    });

});