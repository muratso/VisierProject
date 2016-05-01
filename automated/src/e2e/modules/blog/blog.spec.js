describe('Blog Page', function(){

    var objUtil = browser.params.DIContainer().get('util');
    var objBlogStep = browser.params.DIContainer().get('blogStep');
    var objBlogPage = browser.params.DIContainer().get('blogPage');

    objUtil.waitPageLoad(browser);
    objBlogStep.openBlog();
    browser.actions().sendKeys(protractor.Key.ESCAPE).perform();

    it('Should assure that we are on blog', function(){

        expect(browser.getCurrentUrl()).toBe(browser.baseUrl + '/workforce-intelligence-blog/');

    });

    it('Should assure that the buttons on blog page exists', function(){

        expect(objBlogPage.subscribeButton().isPresent).toBeTruthy;

    });

    it('Should assure that the page structure are intact (main and sidebar) ',function(){

        expect(objBlogPage.sidebarAttribute().isPresent).toBeTruthy;
        expect(objBlogPage.mainAtrribute().isPresent).toBeTruthy;

    });


});