Ext.define('Sodexoapp.view.consultation.Profile',{
    extend:'Ext.form.Panel',
    alias: 'widget.profile',

    initComponent: function(){
        this.items = [
            {
                xtype:'textfield',
                itemId:'profilename',
                fieldLabel:'Nome:',
                allowBlank:false,
                blankText: 'Campo Obrigatorio',
                msgTarget: 'under',
                margin:'50 0 0 40'
            },{
                xtype:'textfield',
                itemId:'profileuser',
                fieldLabel:'Usuário:',
                allowBlank:false,
                blankText: 'Campo Obrigatorio',
                msgTarget: 'under',
                margin:'10 0 0 40'
            },{
                xtype:'textfield',
                itemId:'profilepassword',
                fieldLabel:'Senha:',
                allowBlank:false,
                blankText: 'Campo Obrigatorio',
                msgTarget: 'under',
                margin:'10 0 0 40'
            },{
                xtype:'textfield',
                itemId:'profilerepassword',
                fieldLabel:'Confirmar Senha:',
                allowBlank:false,
                blankText: 'Campo Obrigatorio',
                msgTarget: 'under',
                margin:'10 0 0 40'
            },{
                xtype:'textfield',
                itemId:'profilecpf',
                fieldLabel:'CPF:',
                allowBlank:false,
                blankText: 'Campo Obrigatorio',
                msgTarget: 'under',
                margin:'10 0 0 40',
                // regex:'/^[0-9]/  [0-9]+$  ',
                // regexText:'Apenas Números'
            },{
                xtype:'textfield',
                itemId:'profilecard',
                fieldLabel:'Nº. Cartão',
                allowBlank:false,
                blankText: 'Campo Obrigatorio',
                msgTarget: 'under',
                margin:'10 0 0 40'
            },{
                xtype:'textfield',
                itemId:'profileemail',
                fieldLabel:'Email:',
                allowBlank:false,
                blankText: 'Campo Obrigatorio',
                msgTarget: 'under',
                vtype: 'email',
                vtypeText: 'Formato invalido. Use o formato: "name@sample.com"',
                margin:'10 0 0 40'
            },{
                xtype:'textfield',
                itemId:'profilevalue',
                fieldLabel:'Valor Diário',
                allowBlank:false,
                blankText: 'Campo Obrigatorio',
                msgTarget: 'under',
                margin:'10 0 0 40',
                // regex:'^[0-9]*\\.?[0-9]+$',
                // regexText:''
            },,{
                xtype:'button',
                itemId:'savebutton',
                text:'salvar',
                textAling:'center',
                action:'save',
                margin:'10 0 20 40',
                align:'right'
            }

        ];

        this.callParent(arguments);
    }
});