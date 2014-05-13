Ext.define('Sodexoapp.controller.User', {
    extend:'Ext.app.Controller',

    views: [
        'NewPassword'
    ],

    refs: [
        {ref: 'myView', selector: 'newpassword'},
        {ref: 'mySendButton', selector: 'newpassword #sendEmailBtn'},
        {ref: 'emailField', selector: 'newpassword #emailField'}
    ],

    init : function(){
        this.control({
            'newpassword #sendEmailBtn':{
                click: this.sendEmail
            },
        });
    },

    sendEmail: function(button){
        console.log('Email sent');
    }
});