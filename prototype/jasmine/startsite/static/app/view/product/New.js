Ext.define('Prod.view.product.New', {
    extend:'Ext.window.Window',
    alias:'widget.productnew',

    title:'Product',
    height:400,
    width:350,

    bbar: [
        '->',
        {
            xtype:'button',
            text:'cancelar',
            textAling:'center',
            action:'cancel',
        },
        {
            xtype:'button',
            text:'salvar',
            textAlign:'center',
            action:'save',
        }
    ],

    initComponent : function(){

        this.items = [
            {
                xtype:'textfield',
                id:'name',
                fieldLabel: 'Name',
                allowBlank: false,
                margin: '20 1 1 20'
            },
            {
                xtype:'textfield',
                id:'price',
                fieldLabel: 'Price',
                allowBlank: false,
                margin: '15 1 1 20'
            },
            {
                xtype:'textfield',
                id:'feature1',
                fieldLabel: 'Feature 1',
                allowBlank: false,
                margin: '30 1 1 20'
            },
            {
                xtype:'textfield',
                id:'feature2',
                fieldLabel: 'Feature 2',
                allowBlank: false,
                margin: '15 1 1 20'
            },
            {
                xtype:'textfield',
                fieldLabel: 'Feature 3',
                id:'feature3',
                allowBlank: false,
                margin: '15 1 1 20'
            }
        ];

        this.callParent(arguments);
    }

});