export function prepareTeams(values?: Array<string>): Array<Array<string>> {
  if (values === undefined) {
    return [];
  }
  const result: Array<Array<string>> = [];
  for (let i = 0; i < values.length; i = i + 2) {
    result.push([values[i], values[i + 1]]);
  }
  return result;
}
