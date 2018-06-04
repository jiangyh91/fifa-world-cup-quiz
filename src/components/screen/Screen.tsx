import * as classNames from 'classnames';
import * as React from 'react';

import { WithStyles, withStyles } from '@material-ui/core';

import FlexLayout from '../flex-layout';
import footerImage from './images/footer.png';
import styles, { ClassKeys } from './styles';

interface ScreenProps {
  flex?: boolean;
  background?: boolean;
  footer?: boolean;
}

type Props = ScreenProps & WithStyles<ClassKeys>;

class Screen extends React.PureComponent<Props> {
  public render() {
    const { classes, children, background, flex, footer } = this.props;
    return (
      <FlexLayout
        className={classNames(
          classes.screen,
          background && classes.backgroundColor
        )}
        justifyContent="space-around"
      >
        <div className={classNames(classes.main, flex && classes.flex)}>
          {children}
        </div>
        {!!footer && (
          <img src={footerImage} className={classes.footer} alt="footer" />
        )}
      </FlexLayout>
    );
  }
}

export default withStyles(styles)(Screen);
