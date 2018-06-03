import * as classNames from 'classnames';
import * as React from 'react';

import { WithStyles, withStyles } from '@material-ui/core';

import FlexLayout from '../flex-layout';
import styles, { ClassKeys } from './styles';

interface ScreenProps {
  flex?: boolean;
  background?: boolean;
}

type Props = ScreenProps & WithStyles<ClassKeys>;

class Screen extends React.PureComponent<Props> {
  public render() {
    const { classes, children, background, flex } = this.props;
    return (
      <FlexLayout
        className={classNames(
          classes.screen,
          background && classes.backgroundColor
        )}
        justifyContent="space-around"
      >
        <div className={classNames(classes.root, flex && classes.flex)}>
          {children}
        </div>
      </FlexLayout>
    );
  }
}

export default withStyles(styles)(Screen);
