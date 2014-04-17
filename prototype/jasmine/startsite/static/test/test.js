Ext.Loader.setConfig({
    disableCaching: false,
    enabled: true,
    paths: {
        Test: 'test',
        SSC: 'app'
    }
});

var application = null;

Ext.onReady(function() {
    application = Ext.create('Ext.app.Application', {
        name: 'SSC',
        requires: [
            'Test.spec.AllSpecs'
        ],
        controllers: [
            'Donate'
        ],
        launch: function() {
            Ext.create('Test.spec.AllSpecs');
        }
    });
});