describe('404 page', () => {
  it('goes to 404 on inexistant routes', () => {
    cy.visit('/recipes/3000');
    cy.location('pathname').should('eq', '/404');

    cy.get('button#back_to_root').click();
    cy.location('pathname').should('eq', '/');
  });
});