Ext.define('Sodexoapp.store.access.Users',{
    extend:'Ext.data.Store',
    model: 'Sodexoapp.model.access.User',
    filter: Ext.emptyFn,
    clearFilter: Ext.emptyFn,
    emailFilter: function (email) {
        Ext.data.Store.prototype.clearFilter.call(this);
        Ext.data.Store.prototype.filter.call(this, 'email', email);
    },

    proxy: {
        type: 'rest',
        url: '/access/user',

        reader: {
            type: 'json',
            root: 'result',
            successProperty: 'success'
        }
    }
});