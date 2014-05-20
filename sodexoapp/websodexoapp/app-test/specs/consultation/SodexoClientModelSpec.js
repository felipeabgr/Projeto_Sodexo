describe('Model SodexoClient', function(){

    it('exists', function() {
        var model = Ext.create('Sodexoapp.model.consultation.SodexoClient', {});
        expect(model.$className).toEqual('Sodexoapp.model.consultation.SodexoClient');
    });

    it('has properties', function() {
        var model = Ext.create('Sodexoapp.model.consultation.SodexoClient', {
            id: 1,
            cpf:'24263676360',
            sodexo_card:'69784583651580'
        });
        expect(model.get('id')).toEqual(1);
        expect(model.get('cpf')).toEqual('24263676360');
        expect(model.get('sodexo_card')).toEqual('69784583651580');
    });
});
