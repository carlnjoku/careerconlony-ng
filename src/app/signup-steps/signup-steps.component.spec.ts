import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupStepsComponent } from './signup-steps.component';

describe('SignupStepsComponent', () => {
  let component: SignupStepsComponent;
  let fixture: ComponentFixture<SignupStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
