describe('Test', function () {
  it('running successfully', () => {
    // Making sure it runs successfully
    
    // Visit page url
    cy.visit('http://localhost:8080')


    //making share header is visible
    cy.get('#header')
      .should('be.visible')
   
    cy.wait(2000)
    
    //making share atleast one flight card is visible
    cy.get('.flight-info')
      .should('be.visible')
    
    cy.get('.origin-airport')
      .should('be.visible')

    //making share filters is working ***************
    
    //filling the input
    cy.get('#departure-airport')
      .type('PDS')
      .type('{enter}')

    // check filter button exists
    cy.get('button#filter-btn').
      invoke('width')
      .should('be.gt', 0)
    cy.wait(1000)

     // Click on filter button
    cy.get('button#filter-btn')
      .click()

    cy.wait(2000)
    
    cy.get('.flight-info')
    .should('contain', 'PDS')

  })

})
