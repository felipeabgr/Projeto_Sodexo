Ext.define('Sodexoapp.view.consultation.Balance', {
    extend:'Ext.panel.Panel',
    alias: 'widget.balaceConsult',

    header: false,
    height: 600,
    title: 'Container Panel',


    initComponent: function() {

        this.items = [
            {
                xtype: 'panel',
                header: false,
                title: 'Child Panel 1',
                border: 0,
                layout: {
                    type: 'vbox',
                    align: 'center'
                },
                items:[
                    {
                        xtype: 'text',
                        text: 'Consulta do saldo:',
                        margin: "5",
                        style: {
                            fontSize: '16px'
                        }
                    },
                    {
                        xtype: 'panel',
                        header: false,
                        title: 'box',
                        height: 80,
                        width: 200,
                        margin: "10 0 10 0"
                    },
                    {
                        xtype: 'textfield',
                        itemId:'captchaField',
                        fieldLabel:'Captcha',
                        labelWidth: 50,
                        margin: "5 0 5 0"
                    },
                    {
                        xtype: 'button',
                        text : 'Enviar',
                        itemId: 'sendCaptcha',
                        margin: "10 0 10 0"
                    }
                ]
            },
            {
                xtype: 'panel',
                header: false,
                title: 'Child Panel 2',
                height: 100,
                border: 0,
                layout: {
                    type: 'vbox',
                    align: 'center'
                },
                items:[
                    {
                        xtype: 'panel',
                        header: false,
                        title: 'box',
                        height: 100,
                        width: 350,
                        border: '10 10 10 10',
                        layout: {
                            type: 'vbox',
                            align: 'left'
                        },
                        items:[
                            {
                                xtype: 'text',
                                text: 'Data:',
                                margin: "5"
                            },
                            {
                                xtype: 'text',
                                text: 'Saldo:',
                                margin: "5"
                            },
                            {
                                xtype: 'text',
                                text: 'Valor Diário:',
                                margin: "5"
                            },
                            {
                                xtype: 'text',
                                text: 'Dias Restantes:',
                                margin: "5"
                            },
                            {
                                xtype: 'text',
                                text: 'Resto:',
                                margin: "5"
                            },
                        ]
                    }
                ]
            }
        ];

        this.callParent(arguments);
    }

});