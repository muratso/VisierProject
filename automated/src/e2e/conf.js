
/**
 *  It creates an Object Client. Each client has it's own Config and Environment file
 *  We can do that when we have adaptations from the same website
 * @type {{xys: {Config: string, Environment: string}}}
 */

var modules = {
    'all':{
        Environment:[
            './modules/about/about.spec.js',
            './modules/blog/blog.spec.js',
            './modules/customerSuccess/customerSuccess.spec.js',
            './modules/home/home.spec.js',
            './modules/industries/industries.spec.js',
            './modules/resources/resources.spec.js',
            './modules/solutions/solutions.spec.js'
        ]
    },

    'home':{
        Environment:"./modules/home/home.spec.js"
    },
    'blog':{
        Environment:"./modules/blog/blog.spec.js"
    },
    'solutions':{
        Environment:"./modules/solutions/solutions.spec.js"
    },
    'industries':{
        Environment:"./modules/industries/industries.spec.js"
    },
    'customerSuccess':{
        Environment:"./modules/customerSuccess/customerSuccess.spec.js"
    },
    'resources':{
        Environment:"./modules/resources/resources.spec.js"
    },
    'about':{
        Environment:"./modules/about/about.spec.js"
    }
};

var environmentToTest = process.argv[3].substr(2);
var environment = modules[environmentToTest];

if(environment == null){
    console.log("Please input some module, syntax: protractor conf.js --client --module \n Existing modules: all, home, blog, solutions, industries, customerSuccess, resources, about");
}
else{
    console.log("Success!!");
}

exports.config = {

    // The address of a running selenium server.
    seleniumAddress: "http://localhost:4444/wd/hub",
    //sauceUser: 'xx',
    //sauceKey: 'xxx',


    /**
     * The selenium must be on privative navigation mode, all the extensions must remain disabled,
     * it should be maximized and creash reporter should be enabled.
     */
    framework: 'jasmine',

    onPrepare: function(){

        //require('../../node_modules/protractor/node_modules/jasmine-reporters');

        /** SauceLabs Mode */
        //jasmine.getEnv().addReporter(new
        //    jasmine.JUnitXmlReporter("/automated/src/e2e/report", true, true, null, true));

        /** Local Mode */
            //jasmine.getEnv().addReporter(new
            //jasmine.JUnitXmlReporter("./report", true, true, null, true));

        browser.ignoreSynchronization = true;
    },

    rootElement: 'html',


    capabilities: {
        'name' : 'Visier Rules!',
        'browserName': 'chrome',
        'maxDuration': '10800',
        'chromeOptions': {
            'args': ['incognito', 'disable-extensions', 'start-maximized', 'enable-crash-reporter-for-testing', 'test-type']
        }
    },

    params: {
        projectConfigs: './service',
        DIContainer: function(){
            var container = require('./core/config/DependencyInjector');
            return container;
        }
    },

    baseUrl: 'http://www.visier.com/',

    // The timeout for each script run on the browser. This should be longer
    // than the maximum time you application needs to stabilize between tasks.
    allScriptsTimeout: 80000,

    // Spec patterns are relative to the current working directly when
    // protractor is called.
    specs: environment['Environment'],

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 900000,
        includeStackTrace: true,
        isVerbose: true,
        silent: false
    }
};