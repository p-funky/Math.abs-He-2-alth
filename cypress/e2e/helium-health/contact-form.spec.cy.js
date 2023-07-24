/// <reference types='cypress' />

import { ContactPage } from '../../page-objects/contact-page';


describe("Helium Health Contact Form Test Suite", () => {
  const contactPage = new ContactPage();

  beforeEach(() => {
    // load the page before each test
    contactPage.navigate();
  });

  it("should verify the form elements are visible", () => {
    contactPage.verifyFormAndFieldsAreVisible();
    contactPage.verifySubmitButtonPresent();
  });

  it("should show validation messages when form is submitted without input", () => {
    contactPage.verifySubmitButtonPresent();
    contactPage.validateFormSubmissionWithoutInput();
  });
  
});
