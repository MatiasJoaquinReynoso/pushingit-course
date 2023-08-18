describe('Esperas', () => {
    const TIMEOUT = 10000;

    beforeEach('', () => {
        cy.visit('');
        cy.get('[id="registertoggle"]').dblclick();
        cy.get('#user').type(`pushingit`);
        cy.get('input#pass').type('123456!');
        cy.contains('Log in').click();
        cy.contains('Waits').click();
        cy.get('[id="wait"]').dblclick();
    })

    it('Espera con wait', () => {
        cy.get('#message').should('have.text', 'You have waited for ten seconds, CONGRATULATIONS')
    })

    it('Espera con timeout', () => {
        cy.get('#message', { timeout: TIMEOUT }).should('have.text', 'You have waited for ten seconds, CONGRATULATIONS')
    })

    it('Espera con timeout', () => {
        cy.get('#message', { timeout: TIMEOUT * 2 }).should('have.text', 'You are a man of patience and have waited fifteen seconds')
    })
});