import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientPersonLibComponent } from './client-person-lib.component';

describe('ClientPersonLibComponent', () => {
  let component: ClientPersonLibComponent;
  let fixture: ComponentFixture<ClientPersonLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientPersonLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientPersonLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
