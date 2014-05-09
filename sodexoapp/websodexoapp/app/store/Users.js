Ext.define('Sodexoapp.store.Users',{
    extend:'Ext.data.Store',
    model: 'Sodexoapp.model.User',

    proxy: {
        type: 'rest',
        url: '/access/user',

        reader: {
            root: 'result',
            successProperty: 'success'
        }

    }

});