/// <reference types="cypress"/>

describe('Primer test con cypress', () => {
    const numeroRandom = Math.floor(Math.random() * 1000)
    let nombre = `Comision9${numeroRandom}`;
    it('Deberia registrar un usuario satisfactoriamente', () => {
        cy.visit('');
        cy.get('#user').type(nombre);
        cy.get('#pass').type('123456!');
        cy.get('[value="Male"]').check({ force: true });
        cy.get('#day').select("10"); //value
        cy.get('#month').select("April"); // texto visible
        cy.get('#year').select(50); // posicion -- index
        cy.get('#submitForm').click();
    });
});