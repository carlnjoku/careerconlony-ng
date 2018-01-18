import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAlumniComponent } from './contact-alumni.component';

describe('ContactAlumniComponent', () => {
  let component: ContactAlumniComponent;
  let fixture: ComponentFixture<ContactAlumniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactAlumniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactAlumniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
