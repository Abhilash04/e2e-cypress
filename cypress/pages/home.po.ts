import ReusableFunctions from "../framework_utils/reusable_functions";

export default class HomePage {
    props = require("../test_data/testdata")
    reusableFunc = new ReusableFunctions();

    private dashboard = "span[text='Dashboard']";
    private overviewTab = ".Overview"
    private error = "div:contains('Wrong email or password.')"

    public verifyLoginSuccessful() {
        let flag = false;
        if (cy.get(this.overviewTab).should('be.visible')) {
            flag = true;
        } else {
            flag = false;
        }
        return flag;
    }

    public loginErrorValidation() {
        let flag = false;
        if (cy.get(this.error).should('be.visible')) {
            flag = true;
        } else {
            flag = false;
        }
        return flag;
    }

}