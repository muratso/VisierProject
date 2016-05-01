var Util = (function() {


    /**
     *
     * @constructor
     */
    function Util() {

    };

    Util.prototype.waitPageLoad = function (browser) {

        browser.wait(function () {

            return browser.executeScript("return document.readyState").then(function (res) {
                return res.toLocaleString("complete");

            });
        });
    };

})();

module.exports = Util;