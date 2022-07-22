import Data from "../support/data";
/// <reference types="cypress" />

describe('shop e2e', () => {

    it('Opens shop and orders an item', () => {
        
    
        cy.visit('https://automationteststore.com/')

        cy.get('[href$="path=68"]').click()
        cy.get(':nth-child(2) > .mt10 > a').should('be.visible').click()
        
        cy.get(':nth-child(3) > .thumbnail > .pricetag > .productcart > .fa').click()
        cy.get('#option350').select('775').should('have.value', '775')
        cy.get('#product_quantity').clear().type('2')
        cy.get('.cart').should('be.visible').click()
        cy.get('#cart_checkout1').click()
        cy.get('#accountFrm > fieldset > .btn').should('be.visible').click()

        cy.url().should('eq', 'https://automationteststore.com/index.php?rt=account/create')

        cy.get('#AccountFrm_firstname').type(Data.firstName)
            .should('have.value',Data.firstName)
        cy.get('#AccountFrm_lastname').type(Data.lastName)
            .should('have.value', Data.lastName)
        cy.get('#AccountFrm_email').type(Data.email)
            .should('have.value', Data.email)
        cy.get('#AccountFrm_address_1').type(Data.address)
            .should('have.value', Data.address)
        cy.get('#AccountFrm_city').type(Data.city)
            .should("have.value", Data.city)
        cy.get('#AccountFrm_postcode').type(Data.postcode)
            .should("have.value", Data.postcode)
        cy.get('#AccountFrm_country_id').select("United States")
            .should("have.value", "223")
        cy.get('#AccountFrm_zone_id').select(Data.state)
        cy.get('#AccountFrm_loginname').type(Data.firstName)
            .should('have.value', Data.firstName)
        cy.get('#AccountFrm_password').type(Data.password)
            .should("have.value", Data.password)
        cy.get('#AccountFrm_confirm').type(Data.password)
            .should("have.value", Data.password)
        cy.get('#AccountFrm_newsletter0').click()
        cy.get('#AccountFrm_agree').click()
        cy.get('.col-md-2 > .btn').click()
        cy.get('#checkout_btn')
        .should('be.visible')
        .click()
        cy.url().should('eq', 'https://automationteststore.com/index.php?rt=checkout/success')

    });
    
});