Ext.define('Prod.view.ProductWindow', {
    extend:'Ext.panel.Panel',
    alias:'widget.ProductWindow',

    title:'Product',
    height:'500',
    width:'800',

    stores: [
     'Products'
    ],

    initComponent: function() {
        this.items = [
            {
                xtype:'container',
                layout:'vbox',
                items: [
                        {
                            xtype:'container',
                            layout:'hbox',
                            items: [
                                {
                                   xtype:'button',
                                   text:'New',
                                   textAling:'center',
                                   handler: function(){
                                        console.log('new Product');
                                   },
                                   margin:'20 1 1 20'
                                },
                                {
                                    xtype:'button',
                                    text:'Apagar Selecionados',
                                    textAling:'center',
                                    handler: function(){
                                        console.log('Apagar Selecionados');
                                    },
                                    margin:'20 1 1 20'
                                }
                            ]
                        },
                        {
                            xtype:'grid',
                            //layout:'fit',
                            height:'300',
                            width:'600',
                            margin:'50 1 1 1',
                            store: Ext.data.StoreManager.lookup('Product'),
                            columns: [
                                { header: 'Id',  dataIndex: 'id' },
                                { header: 'Name', dataIndex: 'name' },
                                { header: 'Price', dataIndex: 'price' }
                            ],
                            renderTo: Ext.getBody()
                        }

                    ]
            }
        ];

        this.callParent(arguments);
    }
});