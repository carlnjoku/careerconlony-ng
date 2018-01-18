import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestModelDrivenComponent } from './test-model-driven.component';

describe('TestModelDrivenComponent', () => {
  let component: TestModelDrivenComponent;
  let fixture: ComponentFixture<TestModelDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestModelDrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestModelDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
