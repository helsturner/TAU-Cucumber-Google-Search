const { Then } = require('@wdio/cucumber-framework');
// const assert = require("assert");
const verifyLinksContain = require('../../support/assertions/verifyLinksContain')


Then(/^links related to "(.*)" are shown on the results page$/, async (keyword) => {
    const links = await $$(".LC20lb");   
//     for (let index = 0; index < links.length; index++) {
//         const link = await links[index];
//         const linkText = await link.getText();
//         const linkTextLower = await linkText.toLowerCase();
//         console.log(linkTextLower);

//         if (linkTextLower) {
//             assert(
//                 linkTextLower.includes(keyword),
//                 `Link text does not include ${keyword}`
//             );
//         };
//    };
    await verifyLinksContain(links, keyword)
});