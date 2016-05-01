var BasePage = (function(browser){
    /**
     * It will open Visier Page
     * @constructor
     */
    function BasePage(){

    }

    BasePage.prototype.url = browser.baseUrl;


    BasePage.prototype.openPage = function(){

        browser.get(this.url);
        //BasePage.loginStep.waitLoadingPage(browser);
    };

    return BasePage;

})(browser);

module.exports = BasePage;