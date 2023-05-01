import { Person } from './person.interface';

export interface LegalPerson extends Person {
  readonly type: 'LEGAL';
  name: string;
  vatNumber: string;
}
