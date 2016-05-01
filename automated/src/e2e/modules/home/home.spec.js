describe('Home Page', function(){

    var objBasePage = browser.params.DIContainer().get('basePage');
    var objUtil = browser.params.DIContainer().get('util');
    var objHomePage = browser.params.DIContainer().get('homePage');

    beforeEach(function(){

        objBasePage.openPage();
        objUtil.waitPageLoad(browser);

    });

    it('Should validate if every menu item is present', function(){

        expect(objHomePage.menuAbout().isPresent).toBeTruthy();
        expect(objHomePage.menuBlog().isPresent).toBeTruthy();
        expect(objHomePage.menuIndustries().isPresent).toBeTruthy();
        expect(objHomePage.menuResources().isPresent).toBeTruthy();
        expect(objHomePage.menuCustomerSuccess().isPresent).toBeTruthy();
        expect(objHomePage.menuSolutions().isPresent).toBeTruthy();


    });


});