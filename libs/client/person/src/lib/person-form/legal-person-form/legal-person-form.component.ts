import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LegalPerson, Person } from '@building-home/shared-lib-person';
import { LegalPersonFormViewModel } from './legal-person-form.view-model';

@Component({
  selector: 'bh-legal-person-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './legal-person-form.component.html',
  styleUrls: ['./legal-person-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LegalPersonFormComponent implements OnInit, OnDestroy {
  @Input() form!: FormGroup;
  @Input() person?: Person;
  @Output() changed: EventEmitter<LegalPerson>;

  protected vm!: LegalPersonFormViewModel;

  constructor(private formBuilder: FormBuilder) {
    this.changed = new EventEmitter<LegalPerson>();
  }

  ngOnInit(): void {
    this.vm = new LegalPersonFormViewModel(
      this.formBuilder,
      this.form,
      this.person as LegalPerson
    );
  }

  ngOnDestroy(): void {
    this.vm.removeControls();
  }
}
