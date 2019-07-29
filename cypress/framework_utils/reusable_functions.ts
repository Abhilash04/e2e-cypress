export default class ReusableFunctions {
    public enterText(locator: string, text: string) {
        try {
            cy.get(locator).should('be.visible').type(text);
            cy.log(`Entering text to the locator - "${locator}" and value is - "${text}"`);
        } catch (err) {
            cy.log(`Exception occured while entering text to the locator - "${locator}" and
            error message is - ${err.message}`);
        }
    }

    public click(locator: string) {
        try {
            cy.get(locator).should('be.visible').click();
            cy.log(`Clicking on the locator - "${locator}"`);

        } catch (err) {
            cy.log(`Exception occured while clicking on the locator - "${locator}" and
            error message is - ${err.message}`);
        }
    }
}
