describe('Store User', function() {

    beforeEach(function() {
      //jasmine.Ajax.install();
    });

    afterEach(function() {
      //jasmine.Ajax.uninstall();
    });

    it('should exists',function() {
        var userStore = Ext.create('Sodexoapp.store.Users');
        expect(userStore.$className).toEqual('Sodexoapp.store.Users');
    });

    it('should make an AJAX request to the correct URL', function() {
        jasmine.Ajax.install();
        var store = Ext.create('Sodexoapp.store.Users');
        store.load();

        expect(jasmine.Ajax.requests.mostRecent().url).toContain('/access/user');
        jasmine.Ajax.uninstall();
    });
});