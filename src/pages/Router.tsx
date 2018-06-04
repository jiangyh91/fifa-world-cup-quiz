import * as React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import ScrollToTop from '../components/scroll-to-top';
import FiFaQuiz from './fifa-quiz';

export default () => (
  <BrowserRouter basename="/build">
    <React.Fragment>
      <ScrollToTop />
      <Route exact path="/" component={FiFaQuiz} />
    </React.Fragment>
  </BrowserRouter>
);
