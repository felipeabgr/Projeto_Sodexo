Ext.define('Sodexoapp.view.consultation.Profile',{
    extend:'Ext.panel.Panel',
    alias: 'widget.profile',

    initComponent: function(){
        this.items = [
            {
                xtype:'textfield',
                itemId:'profilename',
                fieldLabel:'Nome:',
                allowBlank:false,
                blankText: 'Campo Obrigatorio',
                msgTarget: 'under'
            },{
                xtype:'textfield',
                itemId:'profileuser',
                fieldLabel:'Usuário:',
                allowBlank:false,
                blankText: 'Campo Obrigatorio',
                msgTarget: 'under'
            },{
                xtype:'textfield',
                itemId:'profilepassword',
                fieldLabel:'Senha:',
                allowBlank:false,
                blankText: 'Campo Obrigatorio',
                msgTarget: 'under'
            },{
                xtype:'textfield',
                itemId:'profilerepassword',
                fieldLabel:'Confirmar Senha:',
                allowBlank:false,
                blankText: 'Campo Obrigatorio',
                msgTarget: 'under'
            },{
                xtype:'textfield',
                itemId:'profilecpf',
                fieldLabel:'CPF:',
                allowBlank:false,
                blankText: 'Campo Obrigatorio',
                msgTarget: 'under'
            },{
                xtype:'textfield',
                itemId:'profilecard',
                fieldLabel:'Nº. Cartão',
                allowBlank:false,
                blankText: 'Campo Obrigatorio',
                msgTarget: 'under'
            },{
                xtype:'textfield',
                itemId:'profileemail',
                fieldLabel:'Email:',
                allowBlank:false,
                blankText: 'Campo Obrigatorio',
                msgTarget: 'under'
            },{
                xtype:'textfield',
                itemId:'profilevalue',
                fieldLabel:'Valor Diário',
                allowBlank:false,
                blankText: 'Campo Obrigatorio',
                msgTarget: 'under'
            },,{
                xtype:'button',
                itemId:'savebutton',
                text:'salvar',
                textAling:'center',
                action:'save'
            }

        ];

        this.callParent(arguments);
    }
});