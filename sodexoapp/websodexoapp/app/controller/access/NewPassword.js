Ext.define('Sodexoapp.controller.access.NewPassword', {
    extend:'Ext.app.Controller',

    views: [
        'access.NewPassword'
    ],

    refs: [
        {ref: 'myView', selector: 'newpassword'},
        {ref: 'mySendButton', selector: 'newpassword #sendEmailBtn'},
        {ref: 'emailField', selector: 'newpassword #emailField'},
        {ref: 'errorBox', selector: 'newpassword #errorBox'}
    ],

    init : function(){
        this.control({
            'newpassword #sendEmailBtn':{
                click: this.sendEmail
            },
        });
    },

    getCmpView: function(component){
        if(component.getId().match('newpassword')){
            return component;
        }
        return component.up('newpassword');
    },

    sendEmail: function(button){
        var view = this.getCmpView(button);
        var email = view.down('#emailField');

        if(email.isValid()) {
            var store = Ext.create('Sodexoapp.store.access.Users');

            store.on('load', function(store){
                if(store.getCount()===0) {
                    email.markInvalid('Email nao encontrado');
                }else {
                    var user = store.data.items[1].data;
                    this.defineNewPassword(user.id);
                }
            },this);

            store.emailFilter(email.getValue());
            result = store.load();
        }
    },

    defineNewPassword : function(userId){

        Ext.Ajax.request({
            url : '/access/userauthentication/'+userId,
            method: 'PUT',
            scope: this,
            success: function(response, eOpts){
                var jsonResponse = Ext.JSON.decode(response.responseText);
                window.location = './access/login?report_msg='+jsonResponse.result;
            },
            failure: function(response, opts) {
                debugger;
                console.error("Failed: "+response.status_message);
                email.markInvalid("Não foi possível enviar o email com a nova senha. "+
                                    "Por favor, tente mais tarde.");
            }
        });
    }
});