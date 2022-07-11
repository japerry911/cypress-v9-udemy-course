/// <reference types="Cypress" />

describe('test Contact Us form via WebDriverUni', () => {
  it('should be able to submit a successful submission via Contact Us form', () => {
    // cypress code
    cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html');
    
    // cy.get('#contact-us').click();

    cy.get('[name="first_name"]').type('Skylord');
    cy.get('[name="last_name"]').type('P');
    cy.get('[name="email"]').type('skylord@barkmail.com');
    cy.get('textarea.feedback-input').type('How do you use Cypress Automation Testing Framework?');
    cy.get('[type="submit"]').click();
  });

  it('should not be able to submit a successful submission via Contact Us form as all fields are required', () => {
    // cypress code
    cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html');
    
    // cy.get('#contact-us').click();

    cy.get('[name="first_name"]').type('Skylord');
    cy.get('[name="last_name"]').type('P');
    // cy.get('[name="email"]').type('skylord@barkmail.com');
    cy.get('textarea.feedback-input').type('How do you use Cypress Automation Testing Framework?');
    cy.get('[type="submit"]').click();
  });
});