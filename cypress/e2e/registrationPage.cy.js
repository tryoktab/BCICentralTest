describe('Open Homepage, then go to Registration page', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080); // Set viewport to 1920x1080
  });

  it('should be able to see the Registration page in Traveloka, ', () => {
    cy.visit('https://www.traveloka.com')
    cy.wait(1000);
    
    //Registration page
    cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[4]').should('be.visible').click();
    cy.xpath('/html[1]/body[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/h1[1]').should('be.visible').click();
    cy.screenshot('Registration page', {
      capture: 'viewport'
    });
  })
})