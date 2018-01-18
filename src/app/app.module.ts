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
import { TestServiceService } from './test-service.service';



import { IndustryService } from './services/industry.service';
import { IpService } from './services/ip.service';
import { PostsComponent } from './posts/posts.component';
import { LikeComponent } from './like/like.component';
import { FollowComponent } from './follow/follow.component';
import { Post1Component } from './post1/post1.component';
import { CompanyCreateComponent } from './company-create/company-create.component';
import { FeedsComponent } from './feeds/feeds.component'

import { ContactRequestComponent } from './contact-request/contact-request.component';
import { ContactFindComponent } from './contact-find/contact-find.component';
import { ContactInviteComponent } from './contact-invite/contact-invite.component';
import { ContactAlumniComponent } from './contact-alumni/contact-alumni.component';
import { ContactMyContactsComponent } from './contact-my-contacts/contact-my-contacts.component';
import { ProfileExperienceComponent } from './profile-experience/profile-experience.component';
import { ProfileEducationComponent } from './profile-education/profile-education.component';
import { ProfileSkillComponent } from './profile-skill/profile-skill.component';
import { ProfileCertificationComponent } from './profile-certification/profile-certification.component';
import { ProfileProjectComponent } from './profile-project/profile-project.component';
import { ProfileAwardComponent } from './profile-award/profile-award.component';
import { ProfilePublicationComponent } from './profile-publication/profile-publication.component';
import { ProfileWebProfileComponent } from './profile-web-profile/profile-web-profile.component';
import { ProfileWebLanguageComponent } from './profile-web-language/profile-web-language.component';
import { ProfilePortfolioComponent } from './profile-portfolio/profile-portfolio.component';
import { CompanyComponent } from './company/company.component';
import { CompanyAdminComponent } from './company-admin/company-admin.component';
import { CompanyPublicComponent } from './company-public/company-public.component';
import { CompanyAdminUpdateComponent } from './company-admin-update/company-admin-update.component';
import { CompanyAdminHomeComponent } from './company-admin-home/company-admin-home.component';
import { TestingObservablesComponent } from './testing-observables/testing-observables.component';
import { TestModelDrivenComponent } from './test-model-driven/test-model-driven.component';
import { TestModelDrivenValidationComponent } from './test-model-driven-validation/test-model-driven-validation.component';
import { TestReactiveFormComponent } from './test-reactive-form/test-reactive-form.component';
import { TestTemplateDrivenComponent } from './test-template-driven/test-template-driven.component';
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
    ContactMyContactsComponent,
    ContactRequestComponent,
    ContactFindComponent,
    ContactInviteComponent,
    ContactAlumniComponent,
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
    ClickOutsideDirective,
    FeedsComponent,
    ContactMyContactsComponent,
    ProfileExperienceComponent,
    ProfileEducationComponent,
    ProfileSkillComponent,
    ProfileCertificationComponent,
    ProfileProjectComponent,
    ProfileAwardComponent,
    ProfilePublicationComponent,
    ProfileWebProfileComponent,
    ProfileWebLanguageComponent,
    ProfilePortfolioComponent,
    CompanyComponent,
    CompanyAdminComponent,
    CompanyPublicComponent,
    CompanyAdminUpdateComponent,
    CompanyAdminHomeComponent,
    TestingObservablesComponent,
    TestModelDrivenComponent,
    TestModelDrivenValidationComponent,
    TestReactiveFormComponent,
    TestTemplateDrivenComponent
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
      {path:'profile', component:ProfileComponent,
      children:[
        {path:'experience', component:ProfileExperienceComponent},
        {path:'education', component:ProfileEducationComponent},
        {path:'skills', component:ProfileSkillComponent},
        {path:'portfolio', component:ProfilePortfolioComponent},
        {path:'certification', component:ProfileCertificationComponent},
        {path:'project', component:ProfileProjectComponent},
        {path:'award', component:ProfileAwardComponent},
        {path:'publication', component:ProfilePublicationComponent},
        {path:'web-profile', component:ProfileWebProfileComponent},
        {path:'language', component:ProfileWebLanguageComponent}
      ]},
      {path:'contacts', component:ContactsComponent,
      children:[
        {path:'my-contacts', component:ContactMyContactsComponent},
        {path:'request', component:ContactRequestComponent},
        {path:'find', component:ContactFindComponent},
        {path:'invite', component:ContactInviteComponent},
        {path:'alumni', component:ContactAlumniComponent}
      ]},
      {path:'company', component:CompanyComponent,
      children:[
        {path:'admin', component:CompanyAdminComponent,
        children:[
          {path:'home/:memberID', component:CompanyAdminHomeComponent},
          {path:'updates/:memberID', component:CompanyAdminUpdateComponent}
        ]},
        {path:'public', component:CompanyPublicComponent}
      ]},
      {path:'jobs/:id', component:JobDetailsComponent},
      {path:'jobs', component:JobsComponent},
      {path:'groups', component:GroupsComponent},
      {path:'companies', component:CompaniesComponent},
      //{path:'company', component:CompanyCreateComponent},
      {path:'signup', component:SignupComponent},
      {path:'signup-steps', component:SignupStepsComponent},
      {path:'login', component:LoginComponent},
      {path:'posts', component:PostsComponent},
      {path:'posts1', component:Post1Component},
      {path:'forgot-password', component:ForgotPasswordComponent},
      {path:'reset-password', component:ResetPasswordComponent},
      {path:'email-confirmation', component:EmailConfirmationComponent},
      {path:'select-industry', component:SelectIndustryComponent},
      {path:'test', component:TestingObservablesComponent},
      {path:'model_driven', component:TestModelDrivenComponent},
      {path:'model_driven_val', component:TestModelDrivenValidationComponent},
      {path:'reactive_form', component:TestReactiveFormComponent},
      {path:'template_driven', component:TestTemplateDrivenComponent}

      
    ])
  ],
  providers: [UserService, SignupStepsService, ExperienceService, AllCompanyService, SearchTitleService, SearchCompanyService, CountryService, IpService, IndustryService, CompanyService, SignupService, FirebaseService, Firebase1Service, PostService, NewPostService, TestServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
