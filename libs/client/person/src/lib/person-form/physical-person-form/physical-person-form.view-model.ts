import { FormBuilder, FormGroup } from '@angular/forms';
import { PhysicalPerson } from '@building-home/shared-lib-person';

export class PhysicalPersonFormViewModel {
  readonly form: FormGroup;
  readonly person?: PhysicalPerson;
  private readonly physicalPersonFormControls: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    parentForm: FormGroup,
    person?: PhysicalPerson
  ) {
    this.person = person;
    this.form = parentForm;

    this.physicalPersonFormControls = formBuilder.group({
      firstName: [this.person?.firstName],
      lastName: [this.person?.lastName],
      phoneNumber: [this.person?.phoneNumber],
      email: [this.person?.email],
    });

    this.addFormControls();
  }

  addFormControls() {
    for (const name in this.physicalPersonFormControls.controls) {
      this.form.addControl(name, this.physicalPersonFormControls.get(name));
    }
  }

  removeFormControls() {
    for (const name in this.physicalPersonFormControls.controls) {
      this.form.removeControl(name);
    }
  }
}
