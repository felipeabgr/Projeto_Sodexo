describe('Store User', function() {

    /*beforeEach(function() {
      jasmine.Ajax.install();
      loadFixtures('data.html');
    });

    afterEach(function() {
      jasmine.Ajax.uninstall();
    });*/

    it('makes an AJAX request to the correct URL', function() {
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

    it('loads a fixture', function(){
        loadFixtures('data.html');
        expect($('#user1').length).toBe(1);
        expect($('#user1').children()[0].innerText).toEqual('User1');
        expect($('#user1').children()[1].innerText).toEqual('Password1');
        expect($('#user1').children()[2].innerText).toEqual('Email1');
    });


});