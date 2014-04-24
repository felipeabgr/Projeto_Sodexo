Ext.define('Test.spec.Main', {}, function() {

    describe("Main", function() {
        var store = null, ctlr = null;
        myApp = null;

        beforeEach(function(){
            myApp = app/static;
            debugger;
            console.log(myApp);

            if (!ctlr) {
                ctlr = myApp.getApplication().getMainController();
            }

            if (!store) {
                store = ctlr.getStore('Server');
                store.load();
            }
           expect(store).toBeTruthy();
           waitsFor(
               function(){ return !store.isLoading(); },
               "load never completed", 4000
               );
       });

        // Main controller
        it("CONTROLLER : Main controller loaded successfully ",function(){
            expect(ctlr).toBeDefined();
        });

        // Store
        it("STORE : Store Server has loaded successfully with values ",function(){
            expect(store.getCount()).toBeGreaterThan(1);
        });

        // Model
        it("MODEL : Model Server has loaded successfully with field = name ",function(){
            expect(ctlr.getModel('Server').getFields()[0].name).toEqual('name');
        });
        // View - Test for super class
        it("View : Test to verify the view super class is container ",function(){
            expect(myApp.getApplication().getView('Main').superclass.xtype).toEqual('container');
        });
    });
});