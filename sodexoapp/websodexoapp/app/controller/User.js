Ext.define('Sodexoapp.controller.User', {
    extend:'Ext.app.Controller',

    views: [
        'NewPassword'
    ],

    refs: [{
        ref: 'myView',
        selector: 'newpassword'
    }, {
        ref: 'myViewButtonVerify',
        selector: 'newpassword > button[text=Verificar Email]'
    }],

    init : function(){
        this.control({
            'newpassword button[action=verify]':{
                click: this.verifyEmail
            }
        });
    },

    verifyEmail: function(button){
        console.log('Verificar Email');
    }
});