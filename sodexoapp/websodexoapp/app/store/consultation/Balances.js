Ext.define('Sodexoapp.store.consultation.Balances',{
    extend:'Ext.data.Store',
    model: 'Sodexoapp.model.consultation.Balance',

    proxy: {
        type: 'rest',
        url: '/consultation/balance',

        reader: {
            type: 'json',
            root: 'result',
            successProperty: 'success'
        }
    }
});