import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAdminHomeComponent } from './company-admin-home.component';

describe('CompanyAdminHomeComponent', () => {
  let component: CompanyAdminHomeComponent;
  let fixture: ComponentFixture<CompanyAdminHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyAdminHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyAdminHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
