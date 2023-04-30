import { Person } from './person.interface';
import { PhysicalPerson } from './physical-person.interface';

export interface LegalPerson extends Person {
  readonly type: 'LEGAL';
  name: string;
  vatNumber: string;
  owner: PhysicalPerson;
}
