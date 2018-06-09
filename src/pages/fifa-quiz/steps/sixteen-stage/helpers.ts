export function prepareSixteenTeams(values?: Array<Array<string>>): Array<Array<string>> {
  if (values === undefined) {
    return [];
  }
  const result: Array<Array<string>> = [];
  for (let i = 0; i < values.length; i = i + 2) {
    result.push([values[i][0], values[i + 1][1]]);
  }
  for (let i = 1; i < values.length; i = i + 2) {
    result.push([values[i][0], values[i - 1][1]]);
  }
  return result;
}

export function disabledNext(stageValues: Array<string>, length: number) {
  if (stageValues.length === length) {
    if (stageValues.findIndex(item => item === undefined) === -1) {
      return false;
    }
  }
  return true;
}
