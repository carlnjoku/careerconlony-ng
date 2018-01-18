import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileExperienceComponent } from './profile-experience.component';

describe('ProfileExperienceComponent', () => {
  let component: ProfileExperienceComponent;
  let fixture: ComponentFixture<ProfileExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
