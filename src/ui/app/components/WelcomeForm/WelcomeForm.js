/**
 * WelcomeForm.js
 *
 * This component contains the Redux Form used to collect user input.
 * Its props are passed down from the Welcome container.
 *
 * @see https://redux-form.com/7.4.2/docs/api/field.md/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form/immutable';
import Button from '@material-ui/core/Button';

import { RFTextField } from 'components/ReduxFormFields/RFTextField';
import { validate } from './validate';

const required = (value) => (value ? undefined : 'Required input, please add');
const minValue = (min) => (value) =>
  (value && value < min ? `Must be at least ${min}` : undefined);
const minValue2 = minValue(2);
const minValue6 = minValue(6);

class WelcomeForm extends React.PureComponent {
  state = {
    fNameSet: false,
    lNameSet: false,
    uNameSet: false,
    fName: '',
    lName: '',
    uName: ''
  };

  // I wanted to further handle the state of the form
  // and unlock the submit button once all 3 fields were complete

  // so once each field has at least some value, set a bool to true
  handleUserName = (e) => {
    this.setState({ uName: e.target.value });
    if (e.target.value.length > 0) {
      this.setState({ uNameSet: true });
    } else {
      this.setState({ uNameSet: false });
    }
  };

  handleFirstName = (e) => {
    this.setState({ fName: e.target.value });
    if (e.target.value.length > 0) {
      this.setState({ fNameSet: true });
    } else {
      this.setState({ fNameSet: false });
    }
  };

  handleLastName = (e) => {
    this.setState({ lName: e.target.value });
    if (e.target.value.length > 0) {
      this.setState({ lNameSet: true });
    } else {
      this.setState({ lNameSet: false });
    }
  };

  // pass all the data up
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit({
      firstname: this.state.fName,
      lastname: this.state.lName,
      username: this.state.uName
    });

    // reset the names
    this.setState({
      fName: '',
      lName: '',
      uName: ''
    });
  };

  render() {
    const { pristine } = this.props;
    const { fNameSet, lNameSet, uNameSet } = this.state;

    // check to see if all 3 fields have values and unlock submit
    const isEnabled = fNameSet && uNameSet && lNameSet;

    return (
      <form
        className="flex flex-column"
        onSubmit={this.handleSubmit}
        style={{
          margin: 'auto',
          padding: '20px',
          border: ' solid 5px',
          borderRadius: '20px',
          borderColor: !isEnabled || pristine ? 'red' : 'green',
          transition: 'all 2s linear'
        }}
      >
        <Field
          name="firstname"
          component={RFTextField}
          label="enter your first name"
          validate={required} // make sure this data is present
          warn={minValue2}
          onChange={this.handleFirstName}
        />
        <Field
          name="lastname"
          component={RFTextField}
          label="your last name"
          validate={required} // make sure this data is present
          warn={minValue2}
          onChange={this.handleLastName}
        />
        <Field
          name="username"
          component={RFTextField}
          label="and a username"
          validate={required} // make sure this data is present
          warn={minValue6}
          onChange={this.handleUserName}
        />

        <div className="center mt3">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={!isEnabled}
          >
            Submit
          </Button>
        </div>
      </form>
    );
  }
}

WelcomeForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.any
};

// TODO: Add validation
// @see https://redux-form.com/7.4.2/docs/api/reduxform.md/
export default reduxForm({
  form: 'welcome',
  validate
})(WelcomeForm);
