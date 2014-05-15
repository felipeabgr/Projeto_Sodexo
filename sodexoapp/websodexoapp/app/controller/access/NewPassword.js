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
            store.emailFilter(email.getValue());
            result = store.load();
            if(result.data.length===0) {
                email.markInvalid('Email nao encontrado');
            }else {
                this.defineNewPassword();
            }
        }
    },

    defineNewPassword : function(userId){
        console.log('funcao define');
    }
});