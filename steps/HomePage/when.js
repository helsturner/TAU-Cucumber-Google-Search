const { When } = require('@wdio/cucumber-framework');
const search = require('../../support/actions/search');

When(/^The user enters "(.*)" into the search bar$/, async (keyword) => {
    // Enter search term
    // await $(".gLFyf.gsfi").click();
    // await $(".gLFyf.gsfi").setValue(keyword);
    // await $(".aajZCb .gNO89b").waitForDisplayed(5000);
    // await $(".aajZCb .gNO89b").click();
    await search(keyword, $(".gLFyf.gsfi"), $(".aajZCb .gNO89b"))
  });