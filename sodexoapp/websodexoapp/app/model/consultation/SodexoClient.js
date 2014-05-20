Ext.define('Sodexoapp.model.consultation.SodexoClient',{
    extend:'Ext.data.Model',
    fields: [
        {name:'id',type:'int'},
        {name:'cpf',type:'string'},
        {name:'sodexo_card',type:'string'},
    ],
});