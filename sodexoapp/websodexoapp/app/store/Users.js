Ext.define('Sodexoapp.store.Users',{
    extend:'Ext.data.Store',
    model: 'Sodexoapp.model.User',
    proxy: {
        type: 'rest',
        url: '/access/users',

        reader: {
            type: 'json',
            root: 'users',
            successProperty: 'success'
        }
    }
});