import { PersonTypes } from './person-type.interface';
import { Person } from './person.interface';

export interface PhysicalPerson extends Person {
  readonly type: PersonTypes.PHYSICAL;
  firstname: string;
  lastname: string;
  phoneNumber?: string;
  email?: string;
}
