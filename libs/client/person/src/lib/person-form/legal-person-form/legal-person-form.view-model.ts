import { FormBuilder, FormGroup } from '@angular/forms';
import { LegalPerson } from '@building-home/shared-lib-person';

export class LegalPersonFormViewModel {
  readonly form: FormGroup;
  readonly person?: LegalPerson;
  private readonly formControls: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    parent: FormGroup,
    person?: LegalPerson
  ) {
    this.person = person;
    this.form = parent;

    this.formControls = formBuilder.group({
      name: [this.person?.name],
      vatNumber: [this.person?.vatNumber],
    });
  }

  addChildFormControlsToParent() {
    for (const name in this.formControls.controls) {
      this.form.addControl(name, this.formControls.get(name));
    }
  }

  removeChildFormControlsFromParent() {
    for (const name in this.formControls.controls) {
      this.form.removeControl(name);
    }
  }
}
