Ext.define('Sodexoapp.store.consultation.SodexoClients',{
    extend:'Ext.data.Store',
    //model: 'Sodexoapp.model.consultation.SodexoClients',
    proxy: {
        type: 'rest',
        url: '/consultation/sodexoclient'
    }
});