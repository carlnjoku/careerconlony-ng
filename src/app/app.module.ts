import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BuzzComponent } from './buzz/buzz.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { CompaniesComponent } from './companies/companies.component';
import { GroupsComponent } from './groups/groups.component';
import { JobsComponent } from './jobs/jobs.component';
import { ContactsComponent } from './contacts/contacts.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
//import { AuthGuard } from './auth.guard';
import { UserService } from './services/user.service';
import { PostService } from './services/post.service';
import { SignupService } from './signup/signup.service';
import { AllCompanyService } from './services/company-concerns/allcompanies.service';

import { AuthenticationService } from './services/authentication.service';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignupStepsComponent } from './signup-steps/signup-steps.component';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';
import { SelectIndustryComponent } from './select-industry/select-industry.component';

//import { MediumEditorDirective } from 'angular2-medium-editor/medium-editor.directive';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { ClickOutsideDirective } from './shared/dropdown.directive';

import { FirebaseService } from './services/firebase.service';
import { Firebase1Service } from './services/firebase1.service';
import { CompanyService } from './services/company-concerns/company.service';
import { SearchCompanyService } from './services/company-concerns/searchcompany.service';  
import { SearchTitleService } from './services/company-concerns/searchtitle.service';  
import { CountryService } from './services/country.service';
import { ExperienceService } from './services/experience.service';
import { SignupStepsService } from './services/signupsteps.service';
import { NewPostService } from './services/postnew.service';




import { IndustryService } from './services/industry.service';
import { IpService } from './services/ip.service';
import { PostsComponent } from './posts/posts.component';
import { LikeComponent } from './like/like.component';
import { FollowComponent } from './follow/follow.component';
import { Post1Component } from './post1/post1.component';
import { CompanyCreateComponent } from './company-create/company-create.component'



@NgModule({
  declarations: [
    AppComponent,
    BuzzComponent,
    NavbarComponent,
    ProfileComponent,
    CompaniesComponent,
    GroupsComponent,
    JobsComponent,
    ContactsComponent,
    JobDetailsComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    PostsComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    SignupStepsComponent,
    EmailConfirmationComponent,
    SelectIndustryComponent,
    PostsComponent,
    LikeComponent,
    FollowComponent,
    Post1Component,
    CompanyCreateComponent,
    ClickOutsideDirective
   // MediumEditorDirective
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    
    
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'', component:HomeComponent},
      {path:'buzz', component:BuzzComponent},
      {path:'profile', component:ProfileComponent},
      {path:'contacts', component:ContactsComponent},
      {path:'jobs/:id', component:JobDetailsComponent},
      {path:'jobs', component:JobsComponent},
      {path:'groups', component:GroupsComponent},
      {path:'companies', component:CompaniesComponent},
      {path:'new-company', component:CompanyCreateComponent},
      {path:'signup', component:SignupComponent},
      {path:'signup-steps', component:SignupStepsComponent},
      {path:'login', component:LoginComponent},
      {path:'posts', component:PostsComponent},
      {path:'posts1', component:Post1Component},
      {path:'forgot-password', component:ForgotPasswordComponent},
      {path:'reset-password', component:ResetPasswordComponent},
      {path:'email-confirmation', component:EmailConfirmationComponent},
      {path:'select-industry', component:SelectIndustryComponent}
    ])
  ],
  providers: [UserService, SignupStepsService, ExperienceService, AllCompanyService, SearchTitleService, SearchCompanyService, CountryService, IpService, IndustryService, CompanyService, SignupService, FirebaseService, Firebase1Service, PostService, NewPostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
