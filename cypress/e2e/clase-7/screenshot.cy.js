import { LoginPage } from '../support/pages/loginPage'
import { HomePage } from '../support/pages/homePage'
import { ToDoListPage } from '../support/pages/toDoListPage';

describe('Page object model', () => {
    let data;
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const toDoListPage = new ToDoListPage();

    before('Before', () => {
        cy.fixture('tareas').then(datos => {
            data = datos;
        })
    });

    beforeEach('Before Each', () => {
        cy.visit('');
        cy.get('#registertoggle').dblclick()
        loginPage.escribirUsuario(Cypress.env('username'));
        loginPage.escribirContraseña(Cypress.env('password'));
        loginPage.clickLoginButton();
        homePage.clickToDoListButton();
    })


    it('Tomar foto al todo list page', () => {
        cy.screenshot()
        cy.get(toDoListPage.tareaInput).screenshot()
    });
});