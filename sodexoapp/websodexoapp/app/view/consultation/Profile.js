Ext.define('Sodexoapp.view.consultation.Profile',{
    extend:'Ext.form.Panel',
    alias: 'widget.profile',

    title: 'Criar Usuario',
    width: 500,
    margin: '30',

    initComponent: function(){
        this.items = [
            {
                xtype:'textfield',
                itemId:'profilename',
                fieldLabel:'Nome:',
                allowBlank:false,
                blankText: 'Campo Obrigatorio',
                msgTarget: 'under',
                margin:'50 0 0 40',
                width:420
            },{
                xtype:'textfield',
                itemId:'profileuser',
                fieldLabel:'Usuario:',
                allowBlank:false,
                blankText: 'Campo Obrigatorio',
                msgTarget: 'under',
                margin:'10 0 0 40',
                width:420
            },{
                xtype:'textfield',
                itemId:'profilepassword',
                fieldLabel:'Senha:',
                allowBlank:false,
                blankText: 'Campo Obrigatorio',
                msgTarget: 'under',
                margin:'10 0 0 40',
                width:420,
                inputType: 'password'
            },{
                xtype:'textfield',
                itemId:'profilerepassword',
                fieldLabel:'Confirmar Senha:',
                allowBlank:false,
                blankText: 'Campo Obrigatorio',
                msgTarget: 'under',
                margin:'10 0 0 40',
                width:420,
                inputType: 'password'
            },{
                xtype:'textfield',
                itemId:'profilecpf',
                fieldLabel:'CPF:',
                allowBlank:false,
                blankText: 'Campo Obrigatorio',
                msgTarget: 'under',
                margin:'10 0 0 40',
                width:420
            },{
                xtype:'textfield',
                itemId:'profilecard',
                fieldLabel:'N. Cartao',
                allowBlank:false,
                blankText: 'Campo Obrigatorio',
                msgTarget: 'under',
                margin:'10 0 0 40',
                width:420
            },{
                xtype:'textfield',
                itemId:'profileemail',
                fieldLabel:'Email:',
                allowBlank:false,
                blankText: 'Campo Obrigatorio',
                msgTarget: 'under',
                vtype: 'email',
                vtypeText: 'Formato invalido. Use o formato: "name@sample.com"',
                margin:'10 0 0 40',
                width:420
            },{
                xtype:'textfield',
                itemId:'profilevalue',
                fieldLabel:'Valor Diario',
                allowBlank:false,
                blankText: 'Campo Obrigatorio',
                msgTarget: 'under',
                margin:'10 0 0 40',
                width:420,
                maskRe:'^d+(.d)?$/',
                regexText:'decimais apenas'
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