// DESAFIO 1
//1. Ingresar en “https://pushing-front.vercel.app/”
//2. Completar todos sus datos para realizar el registro.
//3. Ingresar en la sección “To Do List”
//4. Ingresar una nueva tarea
//5. Completar la tarea clickeando en la misma

/// <reference types="cypress"/>

describe('Desafio 1 - Pushing IT', () => {
    const numeroRandom = Math.floor(Math.random() * 1000)
    let nombre = `Comision9${numeroRandom}`;
    it('Deberia registrar un usuario satisfactoriamente', () => {
        cy.visit('');
        cy.get('#user').type(nombre);
        cy.get('#pass').type('123456!');
        cy.get('[value="Male"]').check({ force: true });
        cy.get('#day').select("10");
        cy.get('#month').select("April");
        cy.get('#year').select(50);
        cy.get('#submitForm').click();
        cy.get('[id="todolistlink"]').parent('p').click();
        cy.get('input#task').type('Completar el primer desafio');
        cy.get('#sendTask').click();
        cy.contains('p', "Completar el primer desafio").click();
    });
});