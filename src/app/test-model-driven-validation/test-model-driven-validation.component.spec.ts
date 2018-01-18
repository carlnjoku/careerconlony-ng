import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestModelDrivenValidationComponent } from './test-model-driven-validation.component';

describe('TestModelDrivenValidationComponent', () => {
  let component: TestModelDrivenValidationComponent;
  let fixture: ComponentFixture<TestModelDrivenValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestModelDrivenValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestModelDrivenValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
