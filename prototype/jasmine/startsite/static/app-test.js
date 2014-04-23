Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    controller: [
        'ProductController'
    ],

    autoCreateViewport: true,
    name: 'JasmineExample',

    launch: function() {
            jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
            jasmine.getEnv().execute();
    }

});