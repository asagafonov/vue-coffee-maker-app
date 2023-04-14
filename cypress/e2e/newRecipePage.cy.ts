describe('New Recipe page', () => {
  it('adds and removes step inputs', () => {
    cy.visit('/recipes/new');
    cy.get('#add').click();
    cy.get('#add').click();
    cy.get('.new_recipe_pane__step_input').should(($step) => {
      expect($step).to.have.length(3);
    });
    cy.get('#remove').click();
    cy.get('.new_recipe_pane__step_input').should(($step) => {
      expect($step).to.have.length(2);
    });
    cy.get('#remove').click();
    cy.get('#remove').should('not.exist');
  });

  it('shows error message on validation failure', () => {
    cy.visit('/recipes/new');
    cy.get('.error_message').should('not.exist');
    cy.get('input#title').type('No');
    cy.get('button[type="submit"]').click();
    cy.get('.error_message').should('contain', 'Title cannot be shorter than 6 characters');
    cy.get('input#title').type('Random coffee name');
    cy.get('button[type="submit"]').click();
    cy.get('.error_message').should('contain', 'Description is required');
  });

  it('redirects to / on recipe save', () => {
    cy.visit('/recipes/new');
    cy.get('input#title').type('Super coffee');
    cy.get('textarea#description').type('Lorem ipsum dolor sit amet');
    cy.get('input#image').type('https://supercoffe.com');
    cy.get('textarea#step_0').type('Lorem ipsum dolor sit amet');
    cy.get('button[type="submit"]').click();
    cy.location('pathname').should('eq', '/');
  });
});