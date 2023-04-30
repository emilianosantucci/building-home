import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {
  Person,
  personRoleLabels,
  personTypeLabels,
} from '@building-home/shared-lib-person';
import { PersonViewModel } from './person-form.model';
import { PhysicalPersonFormComponent } from './physical-person-form/physical-person-form.component';

@Component({
  selector: 'bh-person-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PhysicalPersonFormComponent],
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonFormComponent {
  @Input() readonly model?: Person;
  @Input() readonly editMode: boolean;
  @Output() readonly submitted: EventEmitter<Person>;

  protected vm: PersonViewModel;

  constructor(private formBuilder: FormBuilder) {
    if (!this.model) {
      this.model = {
        roles: ['OWNER'],
        type: 'PHYSICAL',
      };
    }

    this.editMode = false;
    this.submitted = new EventEmitter<Person>();

    this.vm = {
      editMode: this.editMode,
      form: formBuilder.group({
        id: this.model.id,
        type: this.model.type,
        roles: [this.model.roles],
      }),
      roles: Object.entries(personRoleLabels).map(([key, value]) => ({
        id: key,
        name: value,
      })),
      types: Object.entries(personTypeLabels).map(([key, value]) => ({
        id: key,
        name: value,
      })),
      person: this.model,
    };
  }

  protected hasRole = (role: string): boolean =>
    this.vm.form.value.roles.includes(role);
}
