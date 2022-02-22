const { When } = require('@wdio/cucumber-framework');
const search = require('../../support/actions/search');
const closePopup = require('../../support/actions/closePopup')

When(/^The user enters "(.*)" into the search bar$/, async (keyword) => {
    // Deal with cookies pop-up
    // await $("#L2AGLb").waitForDisplayed(5000);
    // await $("#L2AGLb").click();
    // await $(".gLFyf.gsfi").waitForDisplayed(5000);
    await closePopup("#L2AGLb");
    // Enter search term
    // await $(".gLFyf.gsfi").click();
    // await $(".gLFyf.gsfi").setValue(keyword);
    // await $(".aajZCb .gNO89b").waitForDisplayed(5000);
    // await $(".aajZCb .gNO89b").click();
    await search(keyword, $(".gLFyf.gsfi"), $(".aajZCb .gNO89b"))
  });