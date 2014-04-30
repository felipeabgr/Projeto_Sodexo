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
            text:'Enviar',
            textAling:'center',
            action:'send'
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
    }


});