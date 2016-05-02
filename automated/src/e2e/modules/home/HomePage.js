var HomePage = (function(){

    function HomePage(){};

    HomePage.prototype.eleMenuBlog = 'menu-blog';
    HomePage.prototype.eleMenuSolutions = 'menu-solutions';
    HomePage.prototype.eleMenuIndustries = 'menu-industries';
    HomePage.prototype.eleMenuCustomerSuccess = 'menu-customer-success';
    HomePage.prototype.eleMenuResources = 'menu-resources';
    HomePage.prototype.eleMenuAbout = 'menu-about';

    HomePage.prototype.menuBlogButton = function(){

        return element(by.className(this.eleMenuBlog))

    };

    HomePage.prototype.menuSolutionsButton = function(){

        return element(by.className(this.eleMenuSolutions))

    };

    HomePage.prototype.menuIndustriesButton = function(){

        return element(by.className(this.eleMenuIndustries))

    };

    HomePage.prototype.menuCustomerSuccessButton = function(){

        return element(by.className(this.eleMenuCustomerSuccess))

    };

    HomePage.prototype.menuResourcesButton = function(){

        return element(by.className(this.eleMenuResources))

    };

    HomePage.prototype.menuAboutButton = function(){

        return element(by.className(this.eleMenuAbout))

    };


    return HomePage;

})();


HomePage.util = browser.params.DIContainer().get('util');
module.exports = HomePage;