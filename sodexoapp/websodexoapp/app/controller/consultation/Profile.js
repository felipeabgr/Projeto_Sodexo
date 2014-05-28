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
            },
            'profile textfield[itemId=profileuser]':{
                blur: this.userExists
            },
            'profile textfield[itemId=profileemail]':{
                blur: this.emailExists
            }
        });
    },

    saveData: function(button){
        debugger;

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
                           card_number: userProfile.data.card_number,
                           daily_value: userProfile.data.daily_value,
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
    },

    userExists: function(){
        debugger;
        var userField = this.getUsername();

        var store = Ext.create('Sodexoapp.store.access.Users');
        store.on('load', function(store){
            if(store.getCount() > 0) {
                userField.markInvalid('Usuário já existente');
            }
        },this);

        store.filter('username',userField.getValue());
        store.load();
    },

    emailExists: function(){
        var emailField = this.getEmail();

        var store = Ext.create('Sodexoapp.store.access.Users');
        store.on('load', function(store){
            if(store.getCount() > 0) {
                emailField.markInvalid('Email já existente');
            }
        },this);

        store.filter('email',emailField.getValue());
        store.load();
    }
});