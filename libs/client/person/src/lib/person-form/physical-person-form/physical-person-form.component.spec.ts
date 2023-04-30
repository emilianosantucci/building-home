import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhysicalPersonFormComponent } from './physical-person-form.component';

describe('PhysicalPersonFormComponent', () => {
  let component: PhysicalPersonFormComponent;
  let fixture: ComponentFixture<PhysicalPersonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhysicalPersonFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PhysicalPersonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
