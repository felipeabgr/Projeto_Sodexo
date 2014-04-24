Ext.define('Prod.model.Product',{
    extend:'Ext.data.Model',
    fields: [
        {name:'id', type:'int'},
        {name: 'name' , type : 'string'},
        {name: 'price', type : 'float'},
        {name: 'description', type: 'string', defaultValue: 'Default description'}
    ],
    validations: [
        {type: 'presence', field: 'name', message: "Preencha o campo nome"},
    ]
});