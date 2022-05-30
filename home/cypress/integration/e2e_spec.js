describe('My First E2E Test', () => {
  it('Should add an item to the cart', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#showlogin').click();
    cy.get('#showcart').click();
    cy.get('.bg-green-900').click();
    cy.get('.bg-green-900').click();
    cy.get('#cart').click();
    cy.get('.p-5:nth-child(3)').click();
    cy.get('#clearcart').click();
    cy.get('.p-5:nth-child(3)').click();
    cy.url().should('contains', 'http://localhost:3000/cart');
    cy.get('#cart').click();
    cy.get('a:nth-child(1)').click();
    cy.get('#showlogin').click();
    cy.get('.grid > div:nth-child(2)').click();
    cy.get('.bg-red-900').click();
    cy.get('#showcart').click();
    cy.get('.bg-green-900').click();
    cy.get('#clearcart').click();
    cy.get('.grid-cols-2 > div:nth-child(1)').click();
  });
});
