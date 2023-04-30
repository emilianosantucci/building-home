import { PersonRole } from './person-role.interface';
import { PersonType, PersonTypes } from './person-type.interface';
import { Person } from './person.interface';

export class PhysicalPerson implements Person {
  id?: string;
  roles: PersonRole[];
  readonly type: PersonType;
  firstname: string;
  lastname: string;
  phoneNumber?: string;
  email?: string;

  constructor(
    id?: string,
    roles?: [],
    firstname?: string,
    lastname?: string,
    phoneNumber?: string,
    email?: string
  ) {
    this.id = id || undefined;
    this.type = PersonTypes.LEGAL;
    this.roles = roles || [];
    this.firstname = firstname || '';
    this.lastname = lastname || '';
    this.phoneNumber = phoneNumber || '';
    this.email = email || '';
  }
}
