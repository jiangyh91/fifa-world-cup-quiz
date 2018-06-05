import { teamGroups } from './models';

export function resolveTeamValue(
  groupStageValues: Array<Array<string>>,
  groupIndex: number,
  targetTeamName: string
): string | undefined {
  const groupValues = groupStageValues[groupIndex];
  const targetIndex = groupValues.findIndex(
    teamName => teamName === targetTeamName
  );
  if (targetIndex !== -1) {
    const value = targetIndex + 1;
    return teamGroups[groupIndex].name + value;
  }
  return undefined;
}
