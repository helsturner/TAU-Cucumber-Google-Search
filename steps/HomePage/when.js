const { When } = require('@wdio/cucumber-framework');
const googleSearch = require('../../support/actions/search');

When(/^The user enters "(.*)" into the search bar$/, async (keyword) => {
    await googleSearch(keyword)
  });