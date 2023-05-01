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
import { PhysicalPersonFormViewModel } from './physical-person-form.view-model';

@Component({
  selector: 'bh-physical-person-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './physical-person-form.component.html',
  styleUrls: ['./physical-person-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhysicalPersonFormComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() person?: Person;
  @Output() initialized: EventEmitter<void>;
  @Output() changed: EventEmitter<PhysicalPerson>;

  protected vm!: PhysicalPersonFormViewModel;

  constructor(private formBuilder: FormBuilder) {
    this.changed = new EventEmitter<PhysicalPerson>();
    this.initialized = new EventEmitter<void>();
  }

  ngOnInit(): void {
    this.vm = new PhysicalPersonFormViewModel(
      this.formBuilder,
      this.form,
      this.person as PhysicalPerson
    );
  }
}
