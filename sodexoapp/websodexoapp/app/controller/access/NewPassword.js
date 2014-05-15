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
                debugger;
                if(store.getCount()===0) {
                    email.markInvalid('Email nao encontrado');
                }else {
                    var user = store.data.items[0].data;
                    defineNewPassword(user.id);
                }
            },this);

            store.emailFilter(email.getValue());
            result = store.load();
        }
    },

    defineNewPassword : function(userId){
        debugger;
        Ext.Ajax.request({
            url : '/access/userauthentication/'+userId,
            method: 'PUT',
            scope: this,
            success: function(response, eOpts){
                window.location = './access/login?report_msg='+response.responseText;
            },
            failure: function(response, opts) {
               email.markInvalid(response.responseText);
            },
        });
    }
});