module.exports = {

   /* util: function () {
        var util = require('./../../toolbox/util');
        return new util();
    },*/

    basePage: function(){
        var basePage = require('./../page/BasePage');
        return new basePage();
    },

    homePage: function(){
        var homePage = require('./../../modules/home/HomePage');
        return new homePage();
    }

};