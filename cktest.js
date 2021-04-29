describe('My First Test', () => {
  it('Does My Homework, Happy-Path Kinda', () => {
    cy.visit('app.convertkit.com/homework/qa_engineer')

//Fill out Product Details screen
cy.get('input#1')
  .type('Consultation')

cy.get('input#3').click()

cy.get('input#4')
  .type('10.00')

//cy.get('select')
  //.select('Yearly')
  //Not a static select element

  cy.get('button')
    .contains('Next').click()

//Fill out Fulfillment screen
//Expecting error for no download.
  //cy.get('input#1').click()

  //cy.get('button')
    //.contains('Next').click()

cy.get('input').should('have.value', 'download').click({multiple: true})


cy.get('button')
    .contains('Next').click()

//Complete Domain Name Screen

cy.get('input#product-path').clear()
  .type('consultation_page')

cy.get('button')
  .contains('Create Product').click()





  })
})
