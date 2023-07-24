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

  it("should show validation messages when form is submitted without input",
    () => {
    contactPage.verifySubmitButtonPresent();
    contactPage.validateFormSubmissionWithoutInput();
  });

  it("should submit the form with valid input and show success message", () => {
    contactPage.submitFormWithValidInput();
  });

  it("should show validation message for invalid emails", () => {
    const invalidEmails = ["invalid-email", "john.doe@invalid", "@example.com"];
    invalidEmails.forEach(email => {
      contactPage.submitFormWithInvalidEmail(email);
    });
  });

  it("should only select the first 10 digits of a phone number with more than 10 digits", () => {
    const phoneWithMoreThan10Digits = "1234567890123";
    contactPage.selectOnlyFirst10DigitsOfPhone(phoneWithMoreThan10Digits);
  });

  it("should not allow you to input a phone number less than 10 digits", () => {
    const phoneWithLessThan10Digits = "123456789";
    contactPage.discardPhoneWithLessThan10Digits(phoneWithLessThan10Digits);
  });
});
