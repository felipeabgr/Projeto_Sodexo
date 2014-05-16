describe('Balance Store', function() {

    it('should exists',function() {
        var userStore = Ext.create('Sodexoapp.store.balance.Balances');
        expect(userStore.$className).toEqual('Sodexoapp.store.balance.Balances');
    });
});