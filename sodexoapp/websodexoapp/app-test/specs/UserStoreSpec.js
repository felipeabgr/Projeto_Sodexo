describe('Store User', function() {

    /*beforeEach(function() {
      jasmine.Ajax.install();
      loadFixtures('data.html');
    });

    afterEach(function() {
      jasmine.Ajax.uninstall();
    });*/

    it('make an AJAX request to the correct URL', function() {
        jasmine.Ajax.install();
        //var store = Ext.create('Sodexoapp.store.User');
        //store.load();
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(args) {
            if (this.readyState == this.DONE) {
                doneFn(this.responseText);
            }
        };

        xhr.open("GET", "/some/cool/url");
        xhr.send();

        expect(jasmine.Ajax.requests.mostRecent().url).toBe('/some/cool/url');
        jasmine.Ajax.uninstall();
    });

    it('load a fixture', function(){
        loadFixtures('data.html');
        expect($('#list').length).toBe(1);
    });


});