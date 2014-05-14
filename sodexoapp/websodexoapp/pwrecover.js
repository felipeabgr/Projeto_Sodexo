Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'Sodexoapp',

    appFolder: 'static/app',

    controllers: [
        'access.NewPassword'
    ],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            items: [
                {
                    xtype: 'newpassword',
                }
            ]
        });
    }
});