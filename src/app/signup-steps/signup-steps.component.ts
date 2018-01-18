import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../animations/router.animation';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { IndustryService } from '../services/industry.service';
import { CountryService } from '../services/country.service';
import { IpService } from '../services/ip.service';
import { UserService } from '../services/user.service';
import { SignupStepsService } from '../services/signupsteps.service';
import { SearchCompanyService } from '../services/company-concerns/searchcompany.service'
import { SearchTitleService } from '../services/company-concerns/searchtitle.service'
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Rx'
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject'

//import { ActivatedRoute } from '@angular/router';
import { trigger, state, animate, transition, style, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-signup-steps',
  templateUrl: './signup-steps.component.html',
  styleUrls: ['./signup-steps.component.css'],
  //animations: [routerTransition()],
  //host: { '[@routerTransition]': '' }
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
export class SignupStepsComponent implements OnInit {
  
  searchIsEmpty = false
  private geolocation: any = {};
  private session:any;
  private industrylist:any = [];
  private countries:any =[];
  private companyresults: any={};

  private memberID 
  private userIP
  private firstname
  private lastname
  private email
  private address
  private country
  private postCode
  private employer_name
  private position
  private school_name
  private degree
  private employmentstatus
  private industry
  private interest

  private isEmployer: boolean = false
  private isExecutive: boolean = false
  private isEnterpreneur: boolean = false
  private isFreelancer: boolean = false
  private isUnemployed: boolean = false
  private isStudent: boolean = false


  form = new FormGroup({
        memberID: new FormControl(''),
        firstname: new FormControl(''),
        lastname: new FormControl(''),
        address: new FormControl(''),
        userIP: new FormControl(''),
        email: new FormControl(''),
        country: new FormControl(''),
        industry: new FormControl(''),
        postCode: new FormControl(''),
        interest: new FormControl(''),
        employmentstatus: new FormControl(''),
        employer_name: new FormControl(''),
        position: new FormControl(''),
        degree: new FormControl(''),
        school_name: new FormControl('')

  })
          

  constructor(private fb:FormBuilder, private router:Router, private signupstepsService:SignupStepsService, private searchCompanyService:SearchCompanyService, private searchTitleService:SearchTitleService, private userService:UserService, private ipService:IpService, private industryService:IndustryService, private countryService:CountryService) {
    
    let details = JSON.parse(localStorage.getItem("userdetails"));

    this.session = details;
    let memberid = this.session.map(item => item.memberID)
    this.memberID = memberid[0]

    let email = this.session.map(item => item.email)
    this.email = email[0]

    let fname = this.session.map(item => item.firstname)
    this.firstname = fname[0]

    let lname = this.session.map(item => item.lastname)
    this.lastname = lname[0]

   
      
    this.form = fb.group({
            memberID: this.memberID,
            firstname: this.firstname,
            lastname: this.lastname,
            userIP: this.userIP,
            email: this.email,
            country: 'Nigeria',
            postCode: this.postCode,
            employmentstatus: this.employmentstatus,
            industry: this.industry,
            employer_name: this.employer_name,
            position: this.position,
            school_name: this.school_name,
            degree: this.degree,
            interest: this.interest
        });

        
    this.ipService.getIp().subscribe((res => {
      this.userIP = res.query
      this.country = res.country
      console.log(this.userIP)
    }))

   }

 

  
  ngOnInit() {
   
    const industries$ = this.industryService.getAllIndustry();
      industries$.subscribe(industry => {this.industrylist = industry})
  
    this.countryService.getFields()
    .subscribe(country => {this.countries = country
      console.log(this.countries)
    })
    
  }

  
  getFields(id){
  
    if(id == 1){
  
      this.isEmployer = true
      this.isEnterpreneur = false
      this.isExecutive = false
      this.isFreelancer = false
      this.isUnemployed = false
      this.isStudent = false
      console.log(id)
      
    }else if(id == 2){
      
      this.isEnterpreneur = true
      this.isEmployer = false
      this.isExecutive = false
      this.isFreelancer = false
      this.isUnemployed = false
      this.isStudent = false
      console.log(id)
     
    }else if(id == 3){
      
      this.isEnterpreneur = false
      this.isEmployer = false
      this.isExecutive = true
      this.isFreelancer = false
      this.isUnemployed = false
      this.isStudent = false
      console.log(id)
      
    }else if(id == 4){
      
      this.isEnterpreneur = false
      this.isEmployer = false
      this.isExecutive = false
      this.isFreelancer = true
      this.isUnemployed = false
      this.isStudent = false
      console.log(id)
    }else if(id == 5){
      
      this.isEnterpreneur = false
      this.isEmployer = false
      this.isExecutive = false
      this.isFreelancer = false
      this.isUnemployed = true
      this.isStudent = false
      console.log(id)
    }else if(id == 6){
      
      this.isEnterpreneur = false
      this.isEmployer = false
      this.isExecutive = false
      this.isFreelancer = false
      this.isUnemployed = false
      this.isStudent = true
      console.log(id)
    }else{

    }
    
    
  }



  
  submit(){
    console.log(this.form.value)
    
    this.signupstepsService.update(this.form.value)
    .subscribe(
      response =>{ 
        console.log("welcome")
        
      },
      (error: Response) => {
        if(error.status === 400){
          //this.form.setErrors(error.json())
          alert('This post already exist')
        }else{
          alert('An unexpected error occur')
          this.router.navigate(["/email-confirmation"]);
        }
      }
    )

    //Send confirmation email and redirect to email-confirmation page

      //redirect to email-confirmation page
      //this.router.navigate(['/email-confirmation']);
  }

  searchCompanies(terms: string){
    // Create observable of companies
    const $companies = this.searchCompanyService.companySearch(terms)
    //.switchMap(()=> $companies)
    .subscribe((company => this.companyresults = company))
    console.log(this.companyresults)
    
    
    if(this.companyresults == ''){
      this.searchIsEmpty = true
    }else{
      this.searchIsEmpty = false
    }
  }

  searchPosition(terms: string){
    // Create observable of companies
    const $title = this.searchTitleService.titleSearch(terms)
    .switchMap(()=> $title)
    .subscribe((title => console.log(title)))
  }

 
/*
   selectValue(value) {
    this.form.patchValue({"search": value});
    this.showDropDown = false;
   }
   closeDropDown() {
    this.showDropDown = !this.showDropDown;
   }

   openDropDown() {
    this.showDropDown = false;
   }
  
    getSearchValue(){

    }

 */   
    

}