Ext.define('Prod.view.product.MyView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.myview',

    dockedItems: [{
        xtype: 'button',
        text: 'OK',
        dock: 'bottom'
    }, {
        xtype: 'button',
        text: 'Cancel',
        dock: 'bottom'
    }]
});