/// <reference types="cypress"/>

it('to google', () => {
    cy.visit('https://www.google.ru/');
    cy.get('#APjFqb')
        .type('Byndyusoft')
        .type('{enter}');
    cy.wait(1000);
});

///Как сделать переход по первой ссылке после поиска не нашёл

it('to google', () => {
    cy.visit('https://byndyusoft.com/');
    cy.get('.knowMore__container > .btn')
        .click();
    cy.get('.popup-callback__contacts-tg')
        .invoke('attr', 'href')
        .should('eq', 'http://t.me/alexanderbyndyu');
});