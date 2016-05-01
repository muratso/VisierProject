describe('Home Page', function(){

    var objUtil = browser.params.DIContainer().get('util');
    var objHomePage = browser.params.DIContainer().get('homePage');

    beforeEach(function(){

        objUtil.waitPageLoad(browser);

    });

    it('Should validate if every menu item is present', function(){

        expect(objHomePage.menuAboutButton().isPresent).toBeTruthy();
        expect(objHomePage.menuBlogButton().isPresent).toBeTruthy();
        expect(objHomePage.menuIndustriesButton().isPresent).toBeTruthy();
        expect(objHomePage.menuResourcesButton().isPresent).toBeTruthy();
        expect(objHomePage.menuCustomerSuccessButton().isPresent).toBeTruthy();
        expect(objHomePage.menuSolutionsButton().isPresent).toBeTruthy();


    });


});