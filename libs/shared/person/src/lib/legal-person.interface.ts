import { PersonTypes } from './person-type.interface';
import { Person } from './person.interface';
import { PhysicalPerson } from './physical-person.interface';

export interface LegalPerson extends Person {
  readonly type: PersonTypes.LEGAL;
  name: string;
  vatNumber: string;
  owner: PhysicalPerson;
}
