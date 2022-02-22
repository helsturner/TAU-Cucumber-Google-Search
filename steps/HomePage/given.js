const { Given } = require('@wdio/cucumber-framework');
const goToUrl = require('../../support/actions/goToURL');

Given("A web browser is at the Google home page", async () => {
    // await browser.url('/');
    await goToUrl('');
});