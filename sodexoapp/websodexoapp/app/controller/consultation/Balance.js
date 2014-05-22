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
        /*store = Ext.create('Sodexoapp.store.consultation.SodexoClients');
        var user = Sodexoapp.Session.logged_user;
        var sodexoClient;
        debugger;
        store.on('load', function(store){
            debugger;
            sodexoClient = store.data.items[0].data;
        });

        store.filter('user_id', user.id);
        store.load();*/

        var captchText = this.getCaptchField().getValue();
        var post_data = {
            'service': '5;1;6',
            'cardNumber': '6060710676899014',
            'cpf': '08868384795',
            'jcaptcha_response': captchText,
            'x': '6',
            'y': '9',
        };
        debugger;

        /*xt.Ajax.request({
                url: 'https://sodexosaldocartao.com.br/saldocartao/consultaSaldo.do?operation=consult',
                //headers: {'Content-Type': 'application/json'},
                method: 'POST',
                jsonData: post_data,
                success: function(response){
                    debugger;
                    var result = response.responseText;
                },
                failure: function(response){
                    debugger;
                    var teste = response;
                }
            });*/

        Ext.Ajax.request({
            url: 'https://sodexosaldocartao.com.br/saldocartao/consultaSaldo.do?operation=consult',
            jsonData: post_data,
            method : 'POST',
            withCredentials: false,
            useDefaultXhrHeader: false,

           // List of header params can be sent as follows
            headers : {
                "Content-Type" : "application/json",
                "Accept" : "application/json",
                "Access-Control-Allow-Origin":"http://127.0.0.1:8000"
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