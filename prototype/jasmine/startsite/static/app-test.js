Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'Prod',

    appFolder: 'app',

    controller: [
        'ProductController'
    ],

    autoCreateViewport: false,

    launch: function() {
            Ext.create('Ext.container.Viewport', {
                items: {
                xtype: 'mainview'
            }});

            jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
            jasmine.getEnv().execute();
    }
});