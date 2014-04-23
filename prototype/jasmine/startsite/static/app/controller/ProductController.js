Ext.define('Prod.controller.ProductController',{
    extend:'Ext.app.Controller',

    stores: [
        'Products'
    ],

    models: [
        'Product'
    ],

    views: [
        'product.New',
        'product.List'
    ],

    init : function(){
        this.control({

            'productlist button[action=new]': {
                click: this.addProduct
            },
            'productlist button[action=delete]': {
                click: this.deleteProduct
            }
        });
    },

    addProduct : function(button){
        console.log('add product');
        var prodWindow = Ext.widget('productnew');
        prodWindow.show();
    },

    deleteProduct: function(button){
        console.log('delete Product');
    }
});