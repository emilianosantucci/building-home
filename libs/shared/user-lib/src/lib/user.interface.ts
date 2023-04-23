import { UserRole } from './user-role.interface';
export interface User {
  id: string;
  roles: UserRole[];
}
