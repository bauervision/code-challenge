/**
 * LuckyNumber.js
 *
 * This container controls the props used to render the lucky number.
 * It fetches props from the Redux store.
 */

import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

// I tried several ways to use this to pull data to no avail
// import { CONTAINER_KEY } from '../constants';

import LuckyNumberDisplay from '../../components/LuckyNumberDisplay/LuckyNumberDisplay';

class LuckyNumber extends React.PureComponent {
  render() {
    const { firstname, lastname, luckyNumber } = this.props;

    return (
      <article>
        <Helmet>
          <title>Lucky Number</title>
        </Helmet>

        <Zoom>
          {/* I just like to see destructured props when possible for clarity */}
          <LuckyNumberDisplay
            firstname={firstname}
            lastname={lastname}
            luckyNumber={luckyNumber}
          />
        </Zoom>
      </article>
    );
  }
}

LuckyNumber.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  luckyNumber: PropTypes.number
};

/* eslint-disable no-underscore-dangle */
const mapStateToProps = (state) =>
  /* I'm sure there is a better way than this
  but this is the only way I got it to work */
  ({
    firstname: state._root.entries[2][1].firstname,
    lastname: state._root.entries[2][1].lastname,
    luckyNumber: state._root.entries[2][1].luckyNumber.luckyNumber
  });
export default connect(mapStateToProps)(LuckyNumber);
