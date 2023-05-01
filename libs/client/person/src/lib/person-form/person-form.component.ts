import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Person } from '@building-home/shared-lib-person';
import { PersonFormViewModel } from './person-form.view-model';
import { PhysicalPersonFormComponent } from './physical-person-form/physical-person-form.component';

@Component({
  selector: 'bh-person-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PhysicalPersonFormComponent],
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonFormComponent implements OnInit {
  @Input() data!: Person;
  @Input() editMode!: boolean;
  @Output() readonly submitted: EventEmitter<Person>;

  protected vm!: PersonFormViewModel;

  constructor(private formBuilder: FormBuilder) {
    this.submitted = new EventEmitter<Person>();
  }
  ngOnInit(): void {
    this.vm = new PersonFormViewModel(
      this.formBuilder,
      this.editMode,
      this.data
    );
  }

  protected hasRole = (role: string): boolean =>
    this.vm.form.value.roles.includes(role);

  onSubmit() {
    console.log(this.vm.form.controls);
    console.log(this.vm.form.value);
  }
}
