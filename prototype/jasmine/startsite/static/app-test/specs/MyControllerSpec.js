describe('MyController refs', function() {
    var view, ctrl;

    beforeEach(function () {
        view = Ext.create('Prod.view.product.MyView');
        ctrl = Ext.create('Prod.controller.MyController');
    });

    it('should ref MyView objects', function() {
        var cmp = ctrl.getMyView();

        expect(cmp).toBeDefined();
    });

    it('should ref MyView button OK', function() {
        var btn = ctrl.getMyViewButtonOk();

        expect(btn.text).toBe('OK');
    });

    it('should ref MyView button Cancel', function() {
        var btn = ctrl.getMyViewButtonCancel();

        expect(btn.text).toBe('Cancel');
    });
});