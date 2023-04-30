import { PersonRole } from './person-role.interface';
import { PersonType } from './person-type.interface';

export interface Person {
  id?: string;
  roles: PersonRole[];
  readonly type: PersonType;
}
