import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingObservablesComponent } from './testing-observables.component';

describe('TestingObservablesComponent', () => {
  let component: TestingObservablesComponent;
  let fixture: ComponentFixture<TestingObservablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingObservablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
