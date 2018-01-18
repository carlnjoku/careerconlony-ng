import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFindComponent } from './contact-find.component';

describe('ContactFindComponent', () => {
  let component: ContactFindComponent;
  let fixture: ComponentFixture<ContactFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
