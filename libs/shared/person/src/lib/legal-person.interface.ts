import { PersonRole } from './person-role.interface';
import { PersonType, PersonTypes } from './person-type.interface';

import { Person } from './person.interface';
import { PhysicalPerson } from './physical-person.interface';

export class LegalPerson implements Person {
  id?: string;
  roles: PersonRole[];
  readonly type: PersonType;
  name: string;
  vatNumber: string;
  owner: PhysicalPerson;

  constructor(
    id?: string,
    roles?: [],
    name?: string,
    vatNumber?: string,
    owner?: PhysicalPerson
  ) {
    this.id = id || undefined;
    this.type = PersonTypes.LEGAL;
    this.roles = roles || [];
    this.name = name || '';
    this.vatNumber = vatNumber || '';
    this.owner = owner || new PhysicalPerson();
  }
}
