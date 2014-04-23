Ext.define('Test.spec.BasicAssumptions', {}, function() {
    describe("Basic Assumptions: ", function() {
        it("Ext namespace should be available loaded", function() {
            expect(Ext).toBeDefined();
        });
        it("SSC code should be loaded", function() {
            expect(SSC).toBeDefined();
        });
    });
});