describe('home', function(){

    var objHomePage = browser.params.DIContainer().get('homePage');

    beforeEach(function(){

        objHomePage.openPage();

    })

    it('test it', function(){
        browser.sleep(10000);
    })


})