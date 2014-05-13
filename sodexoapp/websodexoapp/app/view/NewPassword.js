Ext.define('Sodexoapp.view.NewPassword', {
    extend:'Ext.window.Window',
    alias:'widget.newpassword',

    title:'NewPassword',
    height:150,
    width:400,


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
                msgTarget: 'under',
                invalidText: 'Invalid Email',
                vtype: 'email',
                vtypeText: 'invalid email Format',
                margin: '20 0 0 20'
            }
        ];

        this.callParent(arguments);
        this.emailField = this.down('[itemId=emailField]');
        this.verifyButton = this.down('[itemId=sendEmailBtn]');
    }
});