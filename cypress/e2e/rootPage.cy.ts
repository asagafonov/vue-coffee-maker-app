describe('Root page', () => {
  it('contains settings buttons', () => {
    cy.visit('/');
    cy.get('button.settings_pane__rnd_btn').should('contain', 'Choose random recipe');
    cy.get('button.settings_pane__new_btn').should('contain', 'Add your recipe');
  });

  it('opens and closes recipe pane', () => {
    cy.visit('/');
    cy.get('div.recipe_card').first().click();
    cy.get('div.recipe_card').first().should('have.class', 'active');
    cy.location('pathname').should('eq', '/recipes/0');
    cy.get('.shader').should('exist');
    cy.get('.recipe_pane__close_btn').click();
    cy.get('div.recipe_card').first().should('not.have.class', 'active');
    cy.location('pathname').should('eq', '/');
    cy.get('.shader').should('not.exist');
  });
})
