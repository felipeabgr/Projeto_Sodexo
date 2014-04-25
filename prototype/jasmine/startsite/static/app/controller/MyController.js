Ext.define('Prod.controller.MyController', {
    extend: 'Ext.app.Controller',

    views: [
        'product.MyView'
    ],

    refs: [{
        ref: 'myView', selector: 'myview'
    }, {
        ref: 'myViewButtonOk',
        selector: 'myview > button[text=OK]'
    }, {
        ref: 'myViewButtonCancel',
        selector: 'myview > button[text=Cancel]'
    }],

    init: function() {
        this.control({
            'myview > button': {
                click: 'onMyViewButtonClick'
            }
        });
    }
});