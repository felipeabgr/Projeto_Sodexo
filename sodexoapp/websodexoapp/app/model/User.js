Ext.define('Sodexoapp.model.User',{
    extend:'Ext.data.Model',
    fields: [
        {name:'id',type:'int'},
        {name:'user',type:'string'},
        {name:'password',type:'string'},
        {name:'email',type:'string'}
    ],
    validations: [
        {type: 'presence', field: 'user', message: "Preencha o campo nome"},
        {type: 'presence', field: 'password', message: "Preencha o campo senha"},
        {type: 'presence', field: 'email', message: "Preencha o campo email"},
    ]
});