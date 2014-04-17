Ext.define('Prod.model.Product',{
    extend:'Ext.data.Model',
    fields: [
        {name:'id', type:'int'},
        {name: 'name' , type : 'string'},
        {name: 'price', type : 'float'}
    ]
});