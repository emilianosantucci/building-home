import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PersonFormComponent } from './person-form/person-form.component';

@Component({
  standalone: true,
  imports: [CommonModule, PersonFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent {}
