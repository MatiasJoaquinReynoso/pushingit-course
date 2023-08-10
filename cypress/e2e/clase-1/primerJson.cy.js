/// <reference types="cypress"/>

describe('Mocha', () => {
    let data; 
    it("Primer test con cypress usando Mocha", () => {
        data = {
            curso: "Pushing It",
            profesor: "Fabrizio Otranto"
        }
        cy.log(data)
    })

    it("Segundo test con cypress usando Mocha", () => {
        data = {
            curso: "Pushing It 2 ",
            profesor: "Fabrizio"
        }
        cy.log(data)
    })
})

it("Tercer test con cypress usando Mocha", () => {
    cy.log('Tercer test')
})