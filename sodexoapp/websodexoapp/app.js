Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'Sodexoapp',

    appFolder: 'static/app',

    controllers:[
         'consultation.Balance'
    ],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
            {
                xtype: 'panel',
                title: 'Sodexoapp',
                height: 100,
                layout: 'column',
                items: [
                {

                    xtype: 'panel',
                    title: 'Menu',
                    columnWidth: 0.2,
                    header: false,
                    border: 0,
                    layout: {
                        type: 'vbox',
                        align: 'center'
                    },
                    items: [
                        {
                            xtype: 'text',
                            text: 'Menu',
                            margin: "5"
                        },
                        {
                            xtype: 'button',
                            text : 'Logout',
                            itemId:'doLogout',
                            margin: "10 0 10 0",
                            width: 100,
                            handler: function (){
                                window.location = './access/logout';
                            }
                        }
                    ]
                },
                {
                    xtype: 'container',
                    title: 'Child Panel 2',
                    columnWidth: 0.8,
                    items: Ext.create('Sodexoapp.view.consultation.Balance')
                }]
            }]
        });
    }
});