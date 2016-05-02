var BlogPage =(function(){

    function BlogPage(){}

    BlogPage.prototype.eleSubscribe = 'subscribe';
    BlogPage.prototype.eleMain = 'main';
    BlogPage.prototype.eleSidebar = 'sidebar';



    BlogPage.prototype.subscribeButton = function(){

      return element(by.className(this.eleSubscribe))

    };

    BlogPage.prototype.mainAtrribute = function(){

        return element(by.className(this.eleMain))

    };

    BlogPage.prototype.sidebarAttribute = function(){

        return element(by.className(this.eleSidebar))

    };


    return BlogPage;

})();

module.exports = BlogPage;