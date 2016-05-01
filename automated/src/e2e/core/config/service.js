module.exports = {

    util: function () {
        var util = require('./../../toolbox/Util');
        return new util();
    },

    homePage: function(){
        var homePage = require('./../../modules/home/HomePage');
        return new homePage();
    },

    blogStep: function(){
        var blogStep = require('./../../modules/blog/BlogStep');
        return new blogStep();
    },

    blogPage: function(){
        var blogPage = require('./../../modules/blog/BlogPage');
        return new blogPage();
    }

};