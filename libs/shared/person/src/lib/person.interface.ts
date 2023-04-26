import { PersonRole } from './person-role.interface';
import { PersonTypes } from './person-type.interface';

export interface Person {
  id?: string;
  roles: PersonRole[];
  readonly type: PersonTypes;
}
