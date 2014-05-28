Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'Sodexoapp',

    appFolder: '/static/app',

    controllers: [
        'consultation.Profile'
    ],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: {
                type: 'vbox',
                align: 'center'
            },
            items: [
                {
                    xtype: 'profile',
                    layout: {align:'center'}
                }
            ]
        });
    }
});