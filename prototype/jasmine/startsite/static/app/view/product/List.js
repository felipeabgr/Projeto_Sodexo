Ext.define('Prod.view.product.List' ,{
    extend: 'Ext.form.Panel',
    alias: 'widget.productlist',

    title: 'Products',

    store: 'Products',

    initComponent: function() {

        this.items = [
            {
                xtype:'button',
                text:'New',
                textAling:'center',
                action:'new',
                margin:'20 1 1 20'
            },
            {
                xtype:'button',
                text:'Apagar Selecionados',
                textAling:'center',
                action:'delete',
                margin:'20 1 1 20'
            },
            {
                xtype:'grid',
                store:'Products',
                columns: [
                    {header: 'Id',  dataIndex: 'id',  flex: 1},
                    {header: 'Name',  dataIndex: 'name',  flex: 1},
                    {header: 'Price',  dataIndex: 'price',  flex: 1}
                ],
                margin:'20 20 20 20'
            }
        ];

       this.callParent(arguments);
    }
});