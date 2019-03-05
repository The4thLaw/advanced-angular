context('News', () => {
    beforeEach(() => {
        cy.visit('localhost:4200')
    })

    // Doesn't work as expected during tests
    // it.only('Shows a loading pane', () => {
    //    cy.server();
    // // Verify that the loading indicator is shown before the request finishes
    // cy.route({
    //   url: '**/news',
    //   onRequest: () => {
    //     console.log('Loading news')
    //     //cy.get('#loading-pane', { timeout: 10000 }).should('be.visible')
    //   }
    // }).as('getTableMetas');

    // cy.wait(1000);

    // cy.get('#newsLink').click()

    //    cy.get('#newsLink').click()
    //     cy.get('#loading-pane', { timeout: 10000 })
    //         .should('be.visible')
    //         .should('contain', 'Please wait');
    // });

    it('Removes the loading pane', () => {
        cy.get('#newsLink').click();
        cy.get('#loading-pane').should('not.exist');
    })

    it('Lists the news', () => {
        cy.get('#newsLink').click();
        cy.get('#loading-pane').should('not.exist');
        cy.get('.newsItem:first-child h2').should('contain', 'ULB denounces Brussels')
        cy.get('.newsItem:first-child p').should('contain', 'Excluding people')
        cy.get('.newsItem:first-child footer')
            .should('contain', 'Christopher Vincent')
            .should('contain', 'I don\'t know')
    })
})
