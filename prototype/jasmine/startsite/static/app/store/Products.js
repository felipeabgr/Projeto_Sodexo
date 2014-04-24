Ext.define('Prod.store.Products', {
    extend:'Ext.data.Store',
    model: 'Prod.model.Product',

    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: '/static/data/products.json',

        reader: {
            type: 'json',
            root: 'products',
            successProperty: 'success'
        }

    }
});