/**
 * RFTextField.js
 *
 * This special component is used within the Redux Form Field component.
 * It renders a textbox component from the Material UI library.
 * It gets passed special props from Redux Form.
 *
 * @see https://redux-form.com/7.4.2/docs/api/field.md/#props
 */

import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

export const RFTextField = ({
  input,
  label,
  meta: { touched, error, warning },
  ...custom
}) => (
  <div className="center flex flex-column">
    <TextField label={label} error={touched && error} {...input} {...custom} />
    {touched &&
      ((error && (
        <span
          style={{
            fontSize: '0.8em',
            textAlign: 'center',
            fontStyle: 'italic'
          }}
        >
          {error}
        </span>
      )) ||
        (warning && <span>{warning}</span>))}
  </div>
);

RFTextField.propTypes = {
  input: PropTypes.any.isRequired,
  label: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.any,
    warning: PropTypes.any
  }).isRequired
};
