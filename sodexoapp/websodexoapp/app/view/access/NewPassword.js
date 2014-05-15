Ext.define('Sodexoapp.view.access.NewPassword', {
    extend:'Ext.panel.Panel',
    alias:'widget.newpassword',

    title: 'Password Recover',
    width: 500,
    height:150,
    margin: '30 0 0 30',


    bbar: [
        '->',
        {
            xtype:'button',
            itemId:'sendEmailBtn',
            text:'Enviar',
            textAling:'center',
            action:'send'
        }
    ],

    initComponent: function() {

        this.items = [
            {
                xtype:'textfield',
                itemId:'emailField',
                fieldLabel:'Email',
                allowBlank:false,
                blankText: 'Campo Obrigatorio',
                msgTarget: 'under',
                invalidText: 'Invalid Email',
                vtype: 'email',
                vtypeText: 'Formato invalido. Use o formato: "name@sample.com"',
                listeners: {
                    afterrender: function(field) {
                        field.focus();
                    }
                },
                margin: '20 0 0 20',
                width:450,
            },
        ];

        this.callParent(arguments);
        this.emailField = this.down('[itemId=emailField]');
        this.verifyButton = this.down('[itemId=sendEmailBtn]');
    }
});