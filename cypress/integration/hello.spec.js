context('Hello', () => {
    beforeEach(() => {
        cy.visit('localhost:4200')
    })

    it('loads', () => {
        cy.title().should('contain', 'Advanced')
    })

    it('has the account for BE1', () => {
        cy.get('table > tbody > tr:first-child > td:first-child').invoke('text').should('eq', 'BE1');
        cy.get('table > tbody > tr:first-child > td:nth-child(2)').invoke('text').should('eq', '100 €');
    })
})
