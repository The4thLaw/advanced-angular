context('Hello', () => {
    beforeEach(() => {
        cy.visit('localhost:4200')
    })

    it('loads', () => {
        cy.title().should('contain', 'Advanced')
    })

    it('has the account for BE1', () => {
        cy.get('table > tbody > tr:first-child > td:first-child').should('have.text', 'BE1')
        cy.get('table > tbody > tr:first-child > td:nth-child(2)').should('have.text', '100 €')
    })

    it('can select BE1', () => {
        cy.get('#bankAccountId').should('be.empty')
        cy.get('table > tbody > tr:first-child button').click()
        cy.get('#bankAccountId').invoke('val').should('eq', 'BE1')
    })

    it('can deposit to BE1', () => {
        cy.get('table > tbody > tr:first-child button').click()
        cy.get('#amountToProcess').type('200')
        cy.get('#btn-deposit').click()
        cy.get('table > tbody > tr:first-child > td:nth-child(2)').should('have.text', '300 €')
    });

    it('can deposit to BE2', () => {
        cy.get('#bankAccountId').type('BE2')
        cy.get('#amountToProcess').type('200')
        cy.get('#btn-deposit').click()
        cy.get('table > tbody > tr:nth-child(2) > td:first-child').should('have.text', 'BE2')
        cy.get('table > tbody > tr:nth-child(2) > td:nth-child(2)').should('have.text', '200 €')
    });

    it('can withdraw from BE1', () => {
        cy.get('#bankAccountId').type('BE1')
        cy.get('#amountToProcess').type('50')
        cy.get('#btn-withdraw').click()
        cy.get('table > tbody > tr:first-child > td:nth-child(2)').should('have.text', '50 €')
    })

    it('shows an error for invalid withdrawal', () => {
        const stub = cy.stub()  
        cy.on('window:alert', stub)
        cy.get('#bankAccountId').type('BE1')
        cy.get('#amountToProcess').type('101')
        cy.get('#btn-withdraw').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Inufficient funds for account BE1')      
        })
    })
})
