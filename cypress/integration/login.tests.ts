import LoginPage from "../pages/login.po"

describe('login', () => {
    let loginPage: LoginPage;
    let testdata = require("../test_data/testdata");

    beforeEach(function () {
        loginPage = new LoginPage()
        loginPage.launchApplication()
    });

    it(testdata.tc_001.name, function () {
        const homePage = loginPage.loginToApp(testdata.tc_001.username, testdata.tc_001.password);
        let result = homePage.verifyLoginSuccessful();
        if (result) {
            cy.log("User logged in successfully.");
        } else {
            cy.log("User is unable to login.");
        }
        expect(result).equals(true);
    });

    it(testdata.tc_002.name, function () {
        const homePage = loginPage.loginToApp(testdata.tc_002.username, testdata.tc_002.password);
        let result = homePage.loginErrorValidation();
        if (result) {
            cy.log("Error message is getting displayed.");
        } else {
            cy.log("Error message is not getting displayed.");
        }
        expect(result).equals(true);
    });

    afterEach(function () {
        cy.clearLocalStorage()
        cy.clearCookies()
    });
});
