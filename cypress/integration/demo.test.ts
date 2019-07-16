describe('google search', () => {
  it('should work', () => {
    cy.visit('http://www.google.com');
    cy.get("input[name=q]").type("Abilash{enter}");
    cy.screenshot();
  });
});