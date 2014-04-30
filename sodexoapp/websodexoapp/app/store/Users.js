Ext.define('Sodexoapp.store.User',{
    extend:'Ext.data.Store',
    model: 'Sodexoapp.model.User',

    autoLoad: true,

    proxy: {
        type:'ajax'

    }

});