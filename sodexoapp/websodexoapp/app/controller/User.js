Ext.define('Sodexoapp.controller.User', {
    extend:'Ext.app.Controller',

    views: [
        'NewPassword'
    ],

    refs: [
        {ref: 'myView', selector: 'newpassword'},
        {ref: 'myVerifyButton', selector: 'newpassword #verifyButton'},
        {ref: 'emailField', selector: 'newpassword #emailField'}
    ],

    init : function(){
        this.control({
            'newpassword #verifyButton':{
                click: this.verifyEmail
            }
        });
    },

    verifyEmail: function(button){
        console.log('Verificar Email');
    }
});