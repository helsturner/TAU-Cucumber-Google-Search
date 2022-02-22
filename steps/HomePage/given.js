const { Given } = require('@wdio/cucumber-framework');
const homePage = require('../../pages/Home')
const goToUrl = require('../../support/actions/goToURL');

Given("A web browser is at the Google home page", async () => {
    await goToUrl(homePage.url);
    await homePage.closeCookiePopup();
});