import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectIndustryComponent } from './select-industry.component';

describe('SelectIndustryComponent', () => {
  let component: SelectIndustryComponent;
  let fixture: ComponentFixture<SelectIndustryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectIndustryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
