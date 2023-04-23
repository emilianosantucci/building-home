export const UserRole = {
  OWNER: 'owner',
  SURVEYOR: 'surveyor',
  MASON: 'mason',
  ELECTRICIAN: 'electrician',
  HYDRAULIC: 'hydraulic',
};

export type UserRole = typeof UserRole[keyof typeof UserRole];
