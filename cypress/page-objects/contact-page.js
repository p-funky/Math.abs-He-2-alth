export class ContactPage {
  contactForm = "#gform_1";
  firstName = "#input_1_1";
  lastName = "#input_1_2";
  email = "#input_1_5";
  phone = "#input_1_6";
  hospital = "#input_1_7";
  location = "#input_1_9";
  noOfPatients = "#input_1_10";
  message = "#field_1_11";
  submitBtn = "#gform_submit_button_1";


  navigate() {
    // visit the website
    cy.visit("https://heliumhealth.com");
    // click the 'Contact Us' button
    cy.contains("Contact Us").click();
    // verify the url after clicking the button
    cy.url().should('include', '/contact');
  }

  verifyFormAndFieldsAreVisible() {
    // verify form and all its fields are present
    cy.get(this.contactForm).should("be.visible");
    cy.get(this.firstName).should("be.visible");
    cy.get(this.lastName).should("be.visible");
    cy.get(this.email).should("be.visible");
    cy.get(this.phone).should("be.visible");
    cy.get(this.hospital).should("be.visible");
    cy.get(this.location).should("be.visible");
    cy.get(this.noOfPatients).should("be.visible");
    cy.get(this.message).should("be.visible");
  }

  verifySubmitButtonPresent() {
    // verify submit button in form is present
    cy.get(this.submitBtn).should("be.visible");
  }
}
