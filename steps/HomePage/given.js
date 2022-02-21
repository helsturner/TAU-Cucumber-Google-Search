const { Given } = require('@wdio/cucumber-framework');

Given("A web browser is at the Google home page", async () => {
    await browser.url('/');
});