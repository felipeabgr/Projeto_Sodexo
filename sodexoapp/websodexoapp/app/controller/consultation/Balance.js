Ext.define('Sodexoapp.controller.consultation.Balance', {
    extend:'Ext.app.Controller',

    views: [
        'consultation.Balance'
    ],

    refs: [
        {ref: 'balanceView', selector: 'balaceConsult'},
        {ref: 'captchField', selector: 'balaceConsult #captchaField'}
    ],

    init: function(){
         this.control({
            'balaceConsult button[itemId=sendCaptcha]': {
                click: this.buildPost
            }
        });
    },

    buildPost: function(button){
        var captchText = this.getCaptchField().getValue();
        var user = Sodexoapp.Session.logged_user;
        Ext.Ajax.request({
            url: '/consultation/balance',
            method: 'POST',
            jsonData: {
                "user_id" : user.id,
                "captcha_text" : captchText,
            },
            success: function(response){
                debugger;
                var result = response.responseText;
            },
            failure: function(response){
                debugger;
                var teste = response;
            }
        });
    }
});