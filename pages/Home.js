class Home {
    // Getters for Google Home Page
    get url() {
        return "/";
    };

    get cookiePopup() {
        return $("#L2AGLb")
    };

    get searchField() {
        return $(".gLFyf.gsfi")
    };

    get searchButton() {
        return $(".aajZCb .gNO89b")
    }

    //Methods for Google Home Page
    async closeCookiePopup(cookiePopup) {
        await this.cookiePopup.waitForDisplayed(5000);
        await this.cookiePopup.click();
        await this.cookiePopup.waitForDisplayed({reverse: true});
    };

    async search(keyword) {
        await this.searchField.waitForDisplayed(5000);
        await this.searchField.click();
        await this.searchField.setValue(keyword);
        await this.searchButton.waitForDisplayed(5000);
        await this.searchButton.click();
    };
};

module.exports = new Home();