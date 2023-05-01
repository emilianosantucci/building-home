import { FormBuilder, FormGroup } from '@angular/forms';
import { LegalPerson } from '@building-home/shared-lib-person';

export class LegalPersonFormViewModel {
  readonly form: FormGroup;
  readonly person?: LegalPerson;
  private readonly legalPersonFormControls: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    parentForm: FormGroup,
    person?: LegalPerson
  ) {
    this.person = person;
    this.form = parentForm;

    this.legalPersonFormControls = formBuilder.group({
      name: [this.person?.name],
      vatNumber: [this.person?.vatNumber],
    });

    this.addControls();
  }

  addControls() {
    for (const name in this.legalPersonFormControls.controls) {
      this.form.addControl(name, this.legalPersonFormControls.get(name));
    }
  }

  removeControls() {
    for (const name in this.legalPersonFormControls.controls) {
      this.form.removeControl(name);
    }
  }
}
