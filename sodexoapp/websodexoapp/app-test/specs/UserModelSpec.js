describe('Model User', function(){

    it('exists', function() {
        var model = Ext.create('Sodexoapp.model.User', {});
        expect(model.$className).toEqual('Sodexoapp.model.User');
    });

    it('has properties', function() {
        var model = Ext.create('Sodexoapp.model.User', {
            user:'defaultName',
            password:'123456',
            email:'defaultEmail@email.com'
        });
        expect(model.get('user')).toEqual('defaultName');
        expect(model.get('password')).toEqual('123456');
        expect(model.get('email')).toEqual('defaultEmail@email.com');
    });

    it('requires user', function() {
        var model = Ext.create('Sodexoapp.model.User',{
            password:'defaultName',
            email:'defaultEmail@email.com'
        });
        var validationResult = model.validate();
        expect(validationResult.isValid()).toBeFalsy();
    });

    it('requires password', function() {
        var model = Ext.create('Sodexoapp.model.User',{
            user:'defaultName',
            email:'defaultEmail@email.com'
        });
        var validationResult = model.validate();
        expect(validationResult.isValid()).toBeFalsy();
    });

    it('requires email', function() {
        var model = Ext.create('Sodexoapp.model.User',{
            user:'defaultName',
            password:'123456',
        });
        var validationResult = model.validate();
        expect(validationResult.isValid()).toBeFalsy();
    });

});