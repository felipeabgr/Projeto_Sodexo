Ext.define('Sodexoapp.controller.consultation.Profile',{
    extend:'Ext.app.Controller',

    views: [
        'consultation.Profile'
    ],

    refs: [
        {ref: 'profile', selector: ''},
    ],

    init: function(){
         this.control({
            'profile button[itemId=savebutton]': {
                click: this.saveData
            }
        });
    },

    saveData: function(button){
        console.log('saving');
    }

});