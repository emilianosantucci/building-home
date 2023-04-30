export const PersonTypes = {
  PHYSICAL: 'PHYSICAL',
  LEGAL: 'LEGAL',
} as const;

export type PersonType = (typeof PersonTypes)[keyof typeof PersonTypes];

export const personTypesLabels: Record<string, string> = {
  PHYSICAL: 'Physical person',
  LEGAL: 'Legal person',
} as const;
