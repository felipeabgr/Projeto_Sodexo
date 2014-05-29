Ext.define('Sodexoapp.controller.consultation.SodexoClient',{
    extend:'Ext.app.Controller',

    views: [
        'consultation.SodexoClient'
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

        console.log("Senha: "+user.data.password);

        if(user.data.password != passwordField.getValue()) {
            passwordField.markInvalid('senhas diferem');

        } else if(this.getProfile().getForm().isValid()){
            Ext.Ajax.request({
                url : '/consultation/sodexoclient',
                method: 'POST',
                header:{'Content-Type': 'application/json'},
                jsonData: data,
                success: function(response, eOpts){
                    var msgSuccess = Ext.String.format("O seu usuário: {0} foi criado com sucesso.\n"+
                        "Você recebeu um email confirmando o seu cadastro.",user.data.username);
                    window.location = './access/login?report_msg='+msgSuccess;
                },
                failure: function(response, opts) {
                    console.log(response.responseText);
                    var msgError = "Ocorreu uma falha ao criar seu usuário. "+
                        "Por favor, entre em contato com o administrador do sistema.";
                    window.location = './access/login?error_msg='+msgError;
                }
            });
        }
    },

    userExists: function(){
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