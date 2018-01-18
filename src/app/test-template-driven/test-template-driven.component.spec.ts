import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTemplateDrivenComponent } from './test-template-driven.component';

describe('TestTemplateDrivenComponent', () => {
  let component: TestTemplateDrivenComponent;
  let fixture: ComponentFixture<TestTemplateDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTemplateDrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
