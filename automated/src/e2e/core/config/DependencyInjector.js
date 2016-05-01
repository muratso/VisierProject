var DIContainer = (function(){

    function DIContainer(){};

    var config = require(browser.params.projectConfigs);

    DIContainer.get = function(service){
        if(!config.hasOwnProperty(service)){
            throw 'DIContainer['+service+']: não existe!';
        };

        return config[service]();
    };

    return DIContainer;
})();

module.exports = DIContainer;