Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'Prod',

    appFolder: 'static/app',

    launch: function() {
        Ext.create('Ext.window.Window', {
            title:'ROADMAP',
            layout: 'fit',
            height: 300,
            width: 450,
            items: [
                {
                    xtype:'container',
                    layout: 'hbox',
                    items: [
                        {
                            xtype:'button',
                            text:'Products',
                            textAling:'center',
                            margin:'100 1 1 100',
                            height:'25',
                            width:'100',
                            handler: function(){
                                console.log('redirecting to Product window');
                            }
                        },
                        {
                            xtype:'button',
                            text:'Product Spec',
                            textAling:'center',
                            margin:'100 1 1 20',
                            height:'25',
                            width:'100',
                            handler: function(){
                                console.log('redirecting to ProdSpec window');
                            }
                        }
                    ]
                }
            ]

        }).show();
    }
});