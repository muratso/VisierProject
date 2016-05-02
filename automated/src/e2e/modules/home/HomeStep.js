
var HomeStep = function(){
};

HomeStep.prototype.openHome = function() {

    HomeStep.basePage.openHome();

}

HomeStep.basePage = browser.params.DIContainer().get('basePage');
HomeStep.util = browser.params.DIContainer().get('util');

module.exports = HomeStep;