describe('Products Store', function() {
    it('should exists',function() {

        var prodStore = Ext.create('Prod.store.Products');
        expect(prodStore.$className).toEqual('Prod.store.Products');
    });


    it('it has the store loaded', function() {
        var prodStore = Ext.create('Prod.store.Products');
        prodStore.load();
        setTimeout(function () {
            expect(prodStore.getCount()).toBeGreaterThan(0);
        }, 250);

    });

    it('1st Element', function() {
        var contact = null;
        var prodStore = Ext.create('Prod.store.Products');
        prodStore.load({
            id: 1,
            scope:this,
            callback: function(records, operation, success){
                if(success){
                    contact = records[0];
                    expect(contact.data.id).toEqual(1);
                }
            }
        });
        setTimeout(function () {
            expect(contact.data.id).toEqual(1);
        }, 1);
    });
});

describe('Prod.store.Products Store Fake Ajax', function() {
    var prodStore = null;

    beforeEach(function() {
      jasmine.Ajax.install();
    });

    afterEach(function() {
      jasmine.Ajax.uninstall();
    });

    it('should make an AJAX request to the correct URL', function() {

        prodStore = Ext.create('Prod.store.Products');
        prodStore.load();

        expect(jasmine.Ajax.requests.mostRecent().url).toContain('/static/data/products.json');

    });

    it('should load fixture data', function() {

        //var fixture = loadFixtures('data.html');
        var fixture = setFixtures('<ul id="list"><li>item 01</li><li>item 02</li></ul>');
        expect($('#list').length).toBe(1);
    });

});