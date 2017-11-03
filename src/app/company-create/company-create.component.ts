import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignupValidator } from '../signup/signup.validators';
import { trigger, state, animate, transition, style, keyframes, query, stagger } from '@angular/animations';
import { CompanyService } from '../services/company-concerns/company.service';
import { IndustryService } from '../services/industry.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.css'],
  animations:[
      trigger('page', [
      transition('* => *', [
        query('.page-content', style({ opacity: 0})),

        query('.page-content', stagger('30ms', [
          animate('600ms 1.2s ease-out', style({ opacity:1}))
        ]))
      ])
    ]),
  ]
})
export class CompanyCreateComponent implements OnInit {
  companys; 
  response;
  industrylist:any = [];
  form = new FormGroup({
    memberID: new FormControl('', [
        Validators.required
    ]),
    companyname: new FormControl('', [
        Validators.minLength(2),
        Validators.required,
    ]),
    url: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
    ]),
    about_coy: new FormControl(''),
    industry: new FormControl(''),
    email: new FormControl('', [
        Validators.required,
        Validators.email
    ])
  })

  get memberID(){
    return this.form.get('memberID');
  }
  get companyname(){
    return this.form.get('companyname');
  }
  get email(){
    return this.form.get('email');
  }
  get url(){
    return this.form.get('url');
  }
  get industry(){
    return this.form.get('industry');
  }
   get about_coy(){
    return this.form.get('about_coy');
  }

  constructor(private service:CompanyService, private industryService:IndustryService) { }

  ngOnInit() {
    const industries$ = this.industryService.getAllIndustry();
      industries$.subscribe(industry => {this.industrylist = industry})
  }


  newCoy(){
    //createUser
    this.service.create(this.form.value)
    .subscribe(
      response => {this.response = response
        // Display response here
        console.log(this.response)
      },
      (error:Response)=>{
        if(error.status === 400){
          this.form.setErrors(error.json())
        }else{
          alert('Unexpected error occured')
        }
      }
    )
    
  }

  deleteCompany(company){
    this.service.delete(company)
    .subscribe(
      response =>{
        let index = this.companys.indexOf(company);
        this.companys.splice(index,1)
      },
      (error:AppError) => {
        if(error instanceof NotFoundError){
          alert('This company has been deleted or does not exist')
        }else{
          alert('Unexpected error occured')
        }
      }
    )
  }

}
