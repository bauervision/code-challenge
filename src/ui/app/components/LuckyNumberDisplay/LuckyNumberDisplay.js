/**
 * LuckyNumberDisplay.js
 *
 * This component displays the user's full name and their lucky number!
 * Its props are passed down from the LuckyNumber container.
 */

import React from 'react';
import PropTypes from 'prop-types';

class LuckyNumberDisplay extends React.PureComponent {
  render() {
    // TODO: Receive props passed down from LuckyNumber container
    const { firstname, lastname, luckyNumber } = this.props;

    return (
      <div className="center w-25 bg-light-green flex flex-column ">
        {/* TODO: Display the user's full name and their lucky number */}
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <div>
            Hello, {firstname} {lastname}
            {'! '}
          </div>
          <div> Your lucky number is </div>
          <div>{luckyNumber}</div>
        </div>
      </div>
    );
  }
}

// TODO: Add PropTypes
LuckyNumberDisplay.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  luckyNumber: PropTypes.number
};

export default LuckyNumberDisplay;
