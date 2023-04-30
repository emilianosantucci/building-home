export type PersonRole =
  | 'OWNER'
  | 'SURVEYOR'
  | 'MASON'
  | 'ELECTRICIAN'
  | 'HYDRAULIC';

export const personRoleLabels = {
  OWNER: 'Owner',
  SURVEYOR: 'Surveyor',
  MASON: 'Mason',
  ELECTRICIAN: 'Electrician',
  HYDRAULIC: 'Hydraulic',
} as const;
