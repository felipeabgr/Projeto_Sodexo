Ext.define('Test.spec.BasicAssumptions', {}, function() {
    describe("Basic Assumptions: ", function() {

        it("Has ExtJS4 loaded", function() {
            expect(Ext).toBeDefined();
            expect(Ext.getVersion()).toBeTruthy();
            expect(Ext.getVersion().major).toEqual(4);
        });

        it("Prod code should be loaded", function() {
            expect(Prod).toBeDefined();
        });
    });
});