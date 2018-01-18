import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInviteComponent } from './contact-invite.component';

describe('ContactInviteComponent', () => {
  let component: ContactInviteComponent;
  let fixture: ComponentFixture<ContactInviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactInviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
