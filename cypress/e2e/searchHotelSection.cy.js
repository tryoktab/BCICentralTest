describe('Open Homepage, then go to Search Hotel Section', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080); // Set viewport to 1920x1080
  });

  it('should be able to see the homepage, then go to Search Hotel Section if we click Hotels in Traveloka', () => {
    cy.visit('https://www.traveloka.com')
    cy.wait(1000);
 
    //Click Hotels
    cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/a[1]').should('be.visible').click();

    //Click City
    cy.xpath('/html[1]/body[1]/div[1]/div[5]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]').should('be.visible').click({ force: true });

    //Search for hotels located in Bandung
    cy.xpath('/html[1]/body[1]/div[1]/div[5]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]').type('Bandung', { force: true });
    cy.wait(1000);
    cy.screenshot('Search for hotels located in Bandung', {
      capture: 'viewport'
    });

    //Select Bandung
    cy.xpath('/html[1]/body[1]/div[1]/div[5]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/span[1]/mark[1]').should('be.visible').click({ force: true });
    
    //Select Date to open Date Picker
    cy.xpath('/html[1]/body[1]/div[1]/div[5]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]').should('be.visible').click({ force: true });

    //Set the check-in date to the current date plus 7 days
    //Current Date (August, 29th 2024) + 7 days = September, 5th 2024
    cy.xpath('/html[1]/body[1]/div[1]/div[5]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/div[5]/div[1]/div[1]/div[2]/div[2]/div[1]').should('be.visible').click({ force: true });
    cy.screenshot('Set the check-in date to the current date plus 7 days', {
      capture: 'viewport'
    });

    //Set the duration to 1 night
    cy.xpath('/html[1]/body[1]/div[1]/div[5]/div[2]/div[1]/div[2]/div[1]/div[3]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]').should('be.visible').click({ force: true });
    cy.xpath('/html[1]/body[1]/div[1]/div[5]/div[2]/div[1]/div[2]/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]').should('contain.value', '1 night');
    cy.screenshot('Set the duration to 1 night', {
      capture: 'viewport'
    });

    //Select Guests and Rooms
    cy.xpath('/html[1]/body[1]/div[1]/div[5]/div[2]/div[1]/div[2]/div[1]/div[5]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]').should('be.visible').click({ force: true });

    //Set the number of Guests to 2 in the Adult field
    cy.xpath('/html[1]/body[1]/div[1]/div[5]/div[2]/div[1]/div[2]/div[1]/div[5]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[3]').should('be.visible').click({ force: true });
    cy.xpath('/html[1]/body[1]/div[1]/div[5]/div[2]/div[1]/div[2]/div[1]/div[5]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]').should('contain.value', '2 Adult(s)');
    cy.screenshot('Set the number of Guests to 2 in the Adult field', {
      capture: 'viewport'
    });

    //click Done
    cy.xpath('/html[1]/body[1]/div[1]/div[5]/div[2]/div[1]/div[2]/div[1]/div[5]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[4]/div[1]/div[1]').should('be.visible').click({ force: true });
    cy.screenshot('Click the "Search Hotels" button', {
      capture: 'viewport'
    });

    //Click the "Search Hotels" button
    cy.xpath('/html[1]/body[1]/div[1]/div[5]/div[2]/div[1]/div[2]/div[1]/div[5]/div[2]/div[1]').should('be.visible').click({ force: true });

    //Validate that the hotel location is in Bandung
    cy.xpath('/html[1]/body[1]/div[1]/div[5]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]').should('contain.value', 'Bandung');
    cy.screenshot('Validate that the hotel location is in Bandung', {
      capture: 'viewport'
    });
  })
})