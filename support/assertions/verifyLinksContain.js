const assert = require("assert");

/**
 * Ensure link text includes keyword
 */

async export default (links, keyword) => {
    for (let index = 0; index < links.length; index++) {
        const link = await links[index];
        const linkText = await link.getText();
        const linkTextLower = await linkText.toLowerCase();
        console.log(linkTextLower);

        if (linkTextLower) {
            assert(
                linkTextLower.includes(keyword),
                `Link text does not include ${keyword}`
            );
        };
   };
};