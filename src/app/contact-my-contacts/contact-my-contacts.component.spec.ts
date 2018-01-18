import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMyContactsComponent } from './contact-my-contacts.component';

describe('ContactMyContactsComponent', () => {
  let component: ContactMyContactsComponent;
  let fixture: ComponentFixture<ContactMyContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactMyContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactMyContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
