/**
 * Navigates to a URL
 * @param {String} url URL to load
 */

module.exports = async function goToUrl(url) {
    await browser.url(`/${url}`);
};
