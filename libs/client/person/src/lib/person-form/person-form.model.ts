import { FormGroup } from '@angular/forms';

export interface PersonViewModel {
  roles: { id: string; name: string }[];
  form: FormGroup;
  editMode: boolean;
  types: { id: string; name: string }[];
}
