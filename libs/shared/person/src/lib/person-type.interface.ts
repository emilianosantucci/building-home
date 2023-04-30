export type PersonType = 'PHYSICAL' | 'LEGAL';
export const personTypeLabels: Record<PersonType, string> = {
  PHYSICAL: 'Physical person',
  LEGAL: 'Legal person',
} as const;
