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
            text:'Verificar Email',
            textAling:'center',
            action:'verify'
        }
    ],

    initComponent: function() {

        this.items = [
            {
                xtype:'textfield',
                id:'emailField',
                fieldLabel:'Email',
                allowBlank:false,
                margin: '20 0 0 20'
            }
        ];

        this.callParent(arguments);
        //this.emailField = this.down('[itemId=emailField]');
    }


});