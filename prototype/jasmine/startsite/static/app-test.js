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

    autoCreateViewport: true,

    launch: function() {
            jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
            jasmine.getEnv().execute();
    }
});