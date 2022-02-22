const homePage = require('../../pages/Home')

/**
 * Search for a keyword
 * @param {String} keyword keyword to search for
 */

module.exports = async (keyword) => {
    await homePage.search(keyword);

};

