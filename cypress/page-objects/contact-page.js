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
  formValidationContainer = "#gform_1_validation_container";
  generalFormErrorMessage = "There was a problem with your submission. Please review the fields below.";
  firstNameValidation = "#validation_message_1_1";
  lastNameValidation = "#validation_message_1_2";
  emailValidation = "#validation_message_1_5";
  phoneValidation = "#validation_message_1_6";
  phoneFormat = "div.instruction";
  hospitalValidation = "#validation_message_1_7";
  locationValidation = "#validation_message_1_9";
  noOfPatientsValidation = "#validation_message_1_10";
  messageValidation = "#validation_message_1_11";

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

  clickSubmitButton() {
    cy.get(this.submitBtn).click({ force: true });
  }

  validateFormSubmissionWithoutInput() {
    // submit the form without entering any information
    this.clickSubmitButton();
    cy.get(this.formValidationContainer).should("be.visible").contains(this.generalFormErrorMessage);
    // verify validation messages for each required field
    const oneFieldErrorMessage = "At least one field must be filled out";
    cy.get(this.firstNameValidation).should("contain", oneFieldErrorMessage);
    cy.get(this.lastNameValidation).should("contain", oneFieldErrorMessage);
    cy.get(this.emailValidation).should("contain", oneFieldErrorMessage);
    cy.get(this.phoneValidation).should("contain", oneFieldErrorMessage);
    cy.get(this.phoneFormat).should("contain", "Phone format: (###) ###-####");
    cy.get(this.hospitalValidation).should("contain", oneFieldErrorMessage);
    cy.get(this.locationValidation).should("contain", oneFieldErrorMessage);
    cy.get(this.noOfPatientsValidation).should("contain", oneFieldErrorMessage);
    cy.get(this.messageValidation).should("contain", oneFieldErrorMessage);
  }
}
