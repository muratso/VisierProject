
var BlogStep = function(){

    BlogStep.prototype.openBlog = function(){

        BlogStep.homePage.menuBlogButton().click();
        BlogStep.util.waitPageLoad(browser);

    };


};

BlogStep.util = browser.params.DIContainer().get('util');
BlogStep.blogPage = browser.params.DIContainer().get('blogPage');
BlogStep.homePage = browser.params.DIContainer().get('homePage');

module.exports = BlogStep;