/**
 * App.js
 *
 * This component is the framework around the actual pages.
 * It renders the routes that determine what container to display.
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, withRouter } from 'react-router-dom';

import Welcome from 'containers/Welcome/Welcome';
import LuckyNumber from 'containers/LuckyNumber/LuckyNumber';
import NotFound from 'containers/NotFound/NotFound';

const App = () => (
  <div className="app-wrapper">
    <Helmet
      titleTemplate="%s - React Code Challenge"
      defaultTitle="React Code Challenge"
    >
      <meta
        name="description"
        content="Step 1: Complete code challenge, Step 2: Interview, Step 3: ???, Step 4: Profit!"
      />
    </Helmet>

    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path="/lucky" component={LuckyNumber} />
      <Route path="" component={NotFound} />
    </Switch>
  </div>
);

export default withRouter(App);
