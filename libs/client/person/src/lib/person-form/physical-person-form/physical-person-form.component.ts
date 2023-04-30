import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Person, PhysicalPerson } from '@building-home/shared-lib-person';

@Component({
  selector: 'bh-physical-person-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './physical-person-form.component.html',
  styleUrls: ['./physical-person-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhysicalPersonFormComponent implements OnInit {
  @Input() person?: Person;
  @Output() changed: EventEmitter<PhysicalPerson>;

  private physicalPerson?: PhysicalPerson;

  protected vm: { form: FormGroup };

  constructor(private formBuilder: FormBuilder) {
    this.changed = new EventEmitter<PhysicalPerson>();

    this.vm = {
      form: formBuilder.group({
        firstName: [this.physicalPerson?.firstName],
        lastName: [this.physicalPerson?.lastName],
        phoneNumber: [this.physicalPerson?.phoneNumber],
        email: [this.physicalPerson?.email],
      }),
    };
  }

  ngOnInit(): void {
    this.physicalPerson = this.person as PhysicalPerson;
    this.vm.form.patchValue(this.physicalPerson);
  }
}
