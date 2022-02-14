export const assertOffline = () => {
	return cy.wrap(window).its('navigator.onLine').should('be.false')
};

export const assertOnline = () => {
  return cy.wrap(window).its('navigator.onLine').should('be.true')
}