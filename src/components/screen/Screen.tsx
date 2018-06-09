import * as classNames from 'classnames';
import * as React from 'react';

import { WithStyles, withStyles } from '@material-ui/core';

import FlexLayout from '../flex-layout';
import backdropImage from './images/backdrop.png';
import footerImage from './images/footer.png';
import styles, { ClassKeys } from './styles';

interface ScreenProps {
  flex?: boolean;
  background?: boolean;
  footer?: boolean;
  backdrop?: boolean;
}

type Props = ScreenProps & WithStyles<ClassKeys>;

class Screen extends React.PureComponent<Props> {
  private screenComponentProps = { id: "screen-with-background" };
  private mainComponentProps = { id: "screen-without-background" };
  public render() {
    const { classes, children, background, flex, footer, backdrop } = this.props;
    return (
      <FlexLayout
        className={classNames(classes.container, background && classes.backgroundColor)}
        justifyContent="space-around"
        componentProps={this.screenComponentProps}
      >
        {backdrop && <img className={classes.backdrop} src={backdropImage} alt="backdrop" />}
        <div className={classNames(classes.screen, flex && classes.flex)} id="screen-without-background">
          {children}
        </div>
        {!!footer && <img src={footerImage} className={classes.footer} alt="footer" />}
      </FlexLayout>
    );
  }
}

export default withStyles(styles)(Screen);
