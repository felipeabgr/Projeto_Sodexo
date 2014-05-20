Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'Sodexoapp',

    appFolder: 'app',

    controllers: [
        'access.NewPassword'
    ],

    autoCreateViewport: false
});