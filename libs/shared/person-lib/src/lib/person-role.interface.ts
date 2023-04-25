export const PersonRoles = {
  OWNER: 'owner',
  SURVEYOR: 'surveyor',
  MASON: 'mason',
  ELECTRICIAN: 'electrician',
  HYDRAULIC: 'hydraulic',
};

export type PersonRole = (typeof PersonRoles)[keyof typeof PersonRoles];
