/** Close the cookies pop-up
 * 
 */

module.exports = async (inputField) => {
    await $(inputField).waitForDisplayed(5000);
    await $(inputField).click();
    await $(inputField).waitForDisplayed({reverse: true});
};