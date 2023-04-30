import { Person } from './person.interface';

export interface PhysicalPerson extends Person {
  readonly type: 'PHYSICAL';
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  email?: string;
}
