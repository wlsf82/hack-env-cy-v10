describe('Hackernews Feed', () => {
  it('shows the correct number of results on the initial load', () => {
    cy.log(`Envionment version: ${Cypress.env('envVersion')}`)

    if (Cypress.env('envVersion') === 'v1') {
      Cypress.env('resultsCount', Cypress.env('v1Environment').maxResultsInitialLoad)
    }
    if (Cypress.env('envVersion') === 'v2') {
      Cypress.env('resultsCount', Cypress.env('v2Environment').maxResultsInitialLoad)
    }

    cy.intercept('GET', '**/search**')
      .as('getStories')

    cy.visit('/')
    cy.wait('@getStories')

    cy.get('div [class$="-header"]')
      .next()
      .parent()
      .find('div')
      .not('[class$="-header"]')
      .its('length')
      .should('be.equal', Cypress.env('resultsCount'))
  })
})