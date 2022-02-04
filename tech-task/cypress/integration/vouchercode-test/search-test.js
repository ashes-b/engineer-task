/// <reference types="cypress" />

describe('Voucercode Test', () => {
    beforeEach(() =>{
        cy.visit('https://www.vouchercodes.co.uk/')
    })

    it('Search Query Test for Local Resturants', () => {
        //click on the food link in the top banner
        cy.get('[data-ga-action="Restaurant"]').click()
        //cy.contains('Food').click()

        //validates landing on the correct page
        cy.url().should('include', '/restaurant-vouchers.html')

        //Inputs London in the location search input, then wait and selects the 1st option in google autocomplete
        cy.get('[data-qa="el:locationDropdown enabled:true"]').type('London').wait(500).type('{downarrow}')

        //Selects option in the dropdown box for date and number of people
        cy.get('[id="day-select"]').select("Today")
        cy.get('[id="people-select"]').select("3")

        //Clicks on find resturant button
        cy.get('[data-qa="el:findRestaurantsVoucherButton"]').click()
        //validates landing on the correct page
        cy.url().should('include', '/restaurant-vouchers/search')

    })

    it('Failing to find an element on homepage', () => {
        //script will fail due to the element spelt incorreclty
        cy.contains('View ALL Top Offers').click()
    });

})