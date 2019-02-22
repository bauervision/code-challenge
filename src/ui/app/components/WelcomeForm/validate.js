/**
 * validate.js
 *
 * This validate function is invoked synchronously from Redux Form
 * whenever the form is submitted. Errors are passed back via the
 * errors object, whose props correspond to the name of the Redux
 * Form field experiencing the error.
 *
 * @see https://redux-form.com/7.4.2/examples/syncvalidation/
 *
 * @param {} values An immutable Map of values from Redux Form
 * @returns An errors object with any validation errors
 */

const validData = (errors, item, length) => {
  if (!item) {
    errors.item = 'Required';
  } else if (item.length < length) {
    errors.item = `Must be at least ${length} characters`;
  }
};

export const validate = (values) => {
  const errors = {};

  // TODO: Validate that the user has entered a username, first name, and last name

  validData(errors, values.username, 8);
  validData(errors, values.firstname, 3);
  validData(errors, values.lastname, 2);
  return errors;
};
