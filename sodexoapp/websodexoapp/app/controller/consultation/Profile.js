Ext.define('Sodexoapp.controller.consultation.Profile',{
    extend:'Ext.app.Controller',

    views: [
        'consultation.Profile'
    ],

    refs: [
        {ref: 'profile', selector: 'profile'},
        {ref: 'name', selector: 'profile #profilename'},
        {ref: 'username', selector: 'profile #profileuser'},
        {ref: 'password', selector: 'profile #profilepassword'},
        {ref: 'rePassword', selector: 'profile #profilerepassword'},
        {ref: 'cpf', selector: 'profile #profilecpf'},
        {ref: 'card', selector: 'profile #profilecard'},
        {ref: 'email', selector: 'profile #profileemail'},
        {ref: 'dailyValue', selector: 'profile #profilevalue'},
    ],

    init: function(){
         this.control({
            'profile button[itemId=savebutton]': {
                click: this.saveData
            }
        });

         this.showData();
    },

    showData: function (){
        console.log('mostrando dados');
    },

    saveData: function(button){
        console.log('save function');

        var user = Ext.create('Sodexoapp.model.access.User');
        user.data.username = this.getUsername().getValue();
        user.data.password = this.getPassword().getValue();
        user.data.email = this.getEmail().getValue();
        var passwordField = this.getRePassword();

        var userProfile = Ext.create('Sodexoapp.model.consultation.SodexoClient');
        userProfile.data.name = this.getName().getValue();
        userProfile.data.cpf = this.getCpf().getValue();
        userProfile.data.card_number = this.getCard().getValue();
        userProfile.data.daily_value = this.getDailyValue().getValue();
        userProfile.data.user_id = user.data;

        var data = {
                       name:userProfile.data.name,
                       cpf: userProfile.data.cpf,
                       cardNumber: userProfile.data.card_number,
                       dailyValue: userProfile.data.daily_value,
                       user: {
                             username: user.data.username,
                             password:user.data.password,
                             email: user.data.email
                       }
                   };

        if(user.data.password != passwordField.getValue()) {
            passwordField.markInvalid('senhas diferem');

        } else if(this.getProfile().getForm().isValid()){
            Ext.Ajax.request({
                url : '/consultation/sodexoclient',
                method: 'POST',
                header:{'Content-Type': 'application/json'},
                jsonData: data,
                success: function(response, eOpts){
                     var jsonResponse = Ext.JSON.decode(response.responseText);
                     window.location = './access/login?report_msg='+jsonResponse.result;
                },
                failure: function(response, opts) {
                    console.error(response.statusText);
                }
            });
        }
    }

});