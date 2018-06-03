import * as classNames from 'classnames';
import * as React from 'react';

import { WithStyles, withStyles } from '@material-ui/core/styles';

import styles, { ClassKeys } from './styles';

export type justifyContentValue =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";
export type flexDirectionValue =
  | "row"
  | "row-reverse"
  | "column"
  | "column-reverse";
export type alignItemsValue =
  | "flex-start"
  | "flex-end"
  | "center"
  | "baseline"
  | "stretch";
export type alignContentValue =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "stretch";
export type flexWrapValue = "nowrap" | "wrap" | "wrap-reverse";

export interface FlexLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  component?: React.ReactType;
  componentProps?: object;
  flexDirection?: flexDirectionValue;
  flexWrap?: flexWrapValue;
  justifyContent?: justifyContentValue;
  alignItems?: alignItemsValue;
  alignContent?: alignContentValue;
  fullWidth?: boolean;
  fullHeight?: boolean;
}

class FlexLayout extends React.PureComponent<
  FlexLayoutProps & WithStyles<ClassKeys>
> {
  private resolveClassNames() {
    const {
      classes,
      className,
      flexDirection,
      flexWrap,
      justifyContent,
      alignItems,
      alignContent,
      fullWidth,
      fullHeight
    } = this.props;

    return classNames(
      //
      // tslint:disable-next-line:no-string-literal
      classes!.root, //
      fullWidth && classes!.fullWidth,
      fullHeight && classes!.fullHeight,

      flexDirection && classes[`flexDirection--${flexDirection}`], //
      flexWrap && classes[`flexWrap--${flexWrap}`], //
      justifyContent && classes[`justifyContent--${justifyContent}`], //
      alignItems && classes[`alignItems--${alignItems}`], //
      alignContent && classes[`alignContent--${alignContent}`], //
      className
      //
    );
  }

  render() {
    const { children, style, component, componentProps } = this.props;
    const Component = component || "div";
    const props = {
      ...componentProps,
      className: classNames(this.resolveClassNames())
    };

    return <Component {...props}>{children}</Component>;
  }
}

export default withStyles(styles)(FlexLayout);
