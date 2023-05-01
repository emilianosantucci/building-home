import { FormBuilder, FormGroup } from '@angular/forms';
import { PhysicalPerson } from '@building-home/shared-lib-person';

export class PhysicalPersonFormViewModel {
  readonly form: FormGroup;
  readonly person?: PhysicalPerson;
  private readonly physicalPersonControls: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    parentForm: FormGroup,
    person?: PhysicalPerson
  ) {
    this.person = person;
    this.form = parentForm;

    this.physicalPersonControls = formBuilder.group({
      firstName: [this.person?.firstName],
      lastName: [this.person?.lastName],
      phoneNumber: [this.person?.phoneNumber],
      email: [this.person?.email],
    });

    this.addControls();
  }

  addControls() {
    for (const name in this.physicalPersonControls.controls) {
      this.form.addControl(name, this.physicalPersonControls.get(name));
    }
  }

  removeControls() {
    for (const name in this.physicalPersonControls.controls) {
      this.form.removeControl(name);
    }
  }
}
