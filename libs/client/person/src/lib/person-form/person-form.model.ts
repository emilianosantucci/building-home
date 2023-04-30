import { FormGroup } from '@angular/forms';
import { Person } from '@building-home/shared-lib-person';

export interface PersonViewModel {
  types: { id: string; name: string }[];
  roles: { id: string; name: string }[];
  form: FormGroup;
  editMode: boolean;
  person: Person;
}
