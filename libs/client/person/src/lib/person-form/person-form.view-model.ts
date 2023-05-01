import { FormBuilder, FormGroup } from '@angular/forms';
import {
  Person,
  personRoleLabels,
  personTypeLabels,
} from '@building-home/shared-lib-person';

export class PersonFormViewModel {
  readonly types: { id: string; name: string }[];
  readonly roles: { id: string; name: string }[];
  readonly form: FormGroup;
  readonly editMode: boolean;
  readonly person: Person;

  constructor(formBuilder: FormBuilder, editMode: boolean, person: Person) {
    this.person = person;
    this.editMode = editMode;
    this.types = Object.entries(personTypeLabels).map(([key, value]) => ({
      id: key,
      name: value,
    }));
    this.roles = Object.entries(personRoleLabels).map(([key, value]) => ({
      id: key,
      name: value,
    }));
    this.form = formBuilder.group({
      id: this.person.id,
      type: this.person.type,
      roles: [this.person.roles],
    });
  }
}
