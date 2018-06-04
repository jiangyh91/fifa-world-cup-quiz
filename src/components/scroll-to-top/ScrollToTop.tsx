import * as React from 'react';

import { RouteComponentProps, withRouter } from 'react-router-dom';

// Scroll restoration based on https://reacttraining.com/react-router/web/guides/scroll-restoration.
type Props = RouteComponentProps<any>;

class ScrollToTopWithoutRouter extends React.PureComponent<Props> {
  componentDidUpdate(prevProps: Props) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return null;
  }
}

export default withRouter(ScrollToTopWithoutRouter);
