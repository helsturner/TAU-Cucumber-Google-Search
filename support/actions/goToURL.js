/**
 * Navigates to a URL
 * @param {String} url URL to load
 */

module.exports = async (url) => {
    await browser.url(`${url}`);
};
