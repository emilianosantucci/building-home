import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LegalPersonFormComponent } from './legal-person-form.component';

describe('LegalPersonFormComponent', () => {
  let component: LegalPersonFormComponent;
  let fixture: ComponentFixture<LegalPersonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalPersonFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LegalPersonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
