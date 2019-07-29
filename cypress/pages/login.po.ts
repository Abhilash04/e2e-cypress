import ReusableFunctions from "../framework_utils/reusable_functions";
import HomePage from "./home.po";

export default class LoginPage {
    testdata = require("../test_data/testdata")
    reusableFunc = new ReusableFunctions();

    private emailInput = "input#email";
    private passwordInput = "input#password";
    private loginButton = "button:contains('SIGN IN')";

    public launchApplication() {
        cy.visit("/")
        return this;
    }

    public loginToApp(username: string, password: string) {
        this.reusableFunc.enterText(this.emailInput, username);
        this.reusableFunc.enterText(this.passwordInput, password);
        this.reusableFunc.click(this.loginButton);
        return new HomePage();
    }

}