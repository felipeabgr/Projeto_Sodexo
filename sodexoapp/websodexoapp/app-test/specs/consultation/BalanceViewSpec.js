function prepareDOM(obj) {
    Ext.DomHelper.append(Ext.getBody(), obj);
}

describe('View Balance', function(){

    var balanceForm = null;
    beforeEach(function () {
        prepareDOM({tag: 'div', id: 'test-balance'});
        balanceForm = Ext.create('Sodexoapp.view.consultation.Balance', {
            renderTo: 'test-balance'
        });
    });

    afterEach(function () {
            balanceForm.destroy();
            balanceForm = null;
        });


    it('exists', function() {
        var view = Ext.create('Sodexoapp.view.consultation.Balance', {});
        expect(view.$className).toEqual('Sodexoapp.view.consultation.Balance');
    });

    it('should have balaceConsult xtype', function(){
        expect(balanceForm.isXType('balaceConsult')).toEqual(true);

    });

});