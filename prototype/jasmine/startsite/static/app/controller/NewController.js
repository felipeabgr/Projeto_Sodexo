Ext.define('Prod.controller.NewController', {
    extend:'Ext.app.Controller',

    views: [
        'product.New'
    ],

    init : function(){
        this.control({

            'productnew button[action=cancel]':{
                click: this.cancelProduct
            },
            'productnew button[action=save]':{
                click: this.saveProduct
            }
        });
    },

    cancelProduct: function(button){
        console.log('cancel product');
    },

    saveProduct: function(button){
        console.log('save product');
    }
});