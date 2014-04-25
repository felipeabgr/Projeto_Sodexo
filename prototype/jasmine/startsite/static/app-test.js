Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'Prod',

    appFolder: 'app',

    autoCreateViewport: false
});