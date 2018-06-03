import { StyleRulesCallback, Theme } from '@material-ui/core/styles';

export type ClassKeys =
  | "root" //
  | "fullWidth"
  | "fullHeight";

const getRuleDefinitions = (ruleName: string, options: Array<string>) =>
  options.reduce(
    (rules, value) =>
      (rules[`${ruleName}--${value}`] = { [ruleName]: value }) && rules,
    {}
  );

const styles: StyleRulesCallback<ClassKeys> = (theme: Theme) => {
  const rules = {
    root: {
      display: "flex"
    },
    fullWidth: {
      width: "100%"
    },
    fullHeight: {
      height: "100%"
    },
    ...getRuleDefinitions("flexDirection", [
      "row",
      "row-reverse",
      "column",
      "column-reverse"
    ]),
    ...getRuleDefinitions("justifyContent", [
      "flex-start",
      "flex-end",
      "center",
      "space-between",
      "space-around",
      "space-evenly"
    ]),
    ...getRuleDefinitions("alignItems", [
      "flex-start",
      "flex-end",
      "center",
      "baseline",
      "stretch"
    ]),
    ...getRuleDefinitions("alignContent", [
      "flex-start",
      "flex-end",
      "center",
      "space-between",
      "space-around",
      "stretch"
    ]),
    ...getRuleDefinitions("flexWrap", ["nowrap", "wrap", "wrap-reverse"])
  };

  return rules;
};

export default styles;
