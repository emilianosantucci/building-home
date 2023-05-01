import { FormBuilder, FormGroup } from '@angular/forms';
import { PhysicalPerson } from '@building-home/shared-lib-person';

export class PhysicalPersonFormViewModel {
  readonly form: FormGroup;
  readonly person?: PhysicalPerson;

  constructor(
    private formBuilder: FormBuilder,
    parentForm: FormGroup,
    person?: PhysicalPerson
  ) {
    this.person = person;
    this.form = parentForm;

    const physicalPersonControls = formBuilder.group({
      firstName: [this.person?.firstName],
      lastName: [this.person?.lastName],
      phoneNumber: [this.person?.phoneNumber],
      email: [this.person?.email],
    });

    for (const name in physicalPersonControls.controls) {
      this.form.addControl(name, physicalPersonControls.get(name));
    }
  }
}
