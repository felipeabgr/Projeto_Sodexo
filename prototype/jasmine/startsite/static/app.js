Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'Prod',

    appFolder: 'static/app',

    controllers: [
        'ProductController',
        'NewController',
        'MyController'
    ],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'productlist',
                }
            ]
        });
    }
});