import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Globalspinner } from './globalspinner';

describe('Globalspinner', () => {
  let component: Globalspinner;
  let fixture: ComponentFixture<Globalspinner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Globalspinner],
    }).compileComponents();

    fixture = TestBed.createComponent(Globalspinner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
