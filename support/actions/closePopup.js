/** Close the cookies pop-up
 * 
 */

module.exports = async function closePopup(inputField) {
    await $(inputField).waitForDisplayed(5000);
    await $(inputField).click();
    await $(inputField).waitForDisplayed({reverse: true});
};