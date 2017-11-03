import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { SignupValidator } from '../signup/signup.validators';
import { trigger, state, animate, transition, style, keyframes, query, stagger } from '@angular/animations';
import { Router } from '@angular/router';
import { SignupService } from '../signup/signup.service'
import { IpService } from '../services/ip.service'
import { Md5} from 'ts-md5/dist/md5';
@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
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
export class SignupComponent implements OnInit {
  
  isUserLoggedin: boolean;
  newuser: any;
  signup_form; FormGroup ;
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  password: string = '';
  geolocation: any = {}

 


  constructor(fb:FormBuilder,  private signupService:SignupService, private ipService:IpService, private router:Router) { 
        this.signup_form = fb.group({
                firstname: ['', Validators.compose([Validators.required, Validators.minLength(2), SignupValidator.cannotContainSpace])],
                lastname: ['', Validators.compose([Validators.required, Validators.minLength(2), SignupValidator.cannotContainSpace])],
                email: ['', Validators.compose([Validators.required, Validators.email, SignupValidator.shouldBeUnique, Validators.minLength(6), SignupValidator.cannotContainSpace])],
                password: ['', Validators.compose([Validators.required, Validators.minLength(6), SignupValidator.cannotContainSpace])]
        })
  }

  ngOnInit() {
    // Check if user is already logged, if yes redirect to buzz page else load the home page
    this.isUserLoggedin = this.signupService.getUserLoggedin()
    this.ipService.getIp().subscribe(ip => {this.geolocation = ip})

    this.ipService.getIp().subscribe((res => {this.geolocation = res }))
    
    console.log(this.isUserLoggedin)
    if(this.isUserLoggedin){
      this.router.navigate(['buzz'])
    }else{
      this.router.navigate(['signup'])
    }

  }

  signup(){
    //createUser
    
    this.signupService.createUser(this.signup_form.value)
    .subscribe(
      response =>{ 
        localStorage.setItem('userdetails', JSON.stringify(response));
        console.log(response)
      },
      (error: Response) => {
        if(error.status === 400){
          //this.form.setErrors(error.json())
          alert('This post already exist')
        }else{
          alert('An unexpected error occur')
        }
      })
      //let userdetails = this.signup_form.value
      //localStorage.setItem('userdetails', JSON.stringify(userdetails));
      //this.router.navigate(['signup-steps']); 
      //console.log(this.signup_form.value)
    /*
    var userdetails :  {
            'memberID':1,
            'firstname':'Carl',
            'lastname':'Njoku',
            'email':'carl@yahoo.comm'
         }
    
    localStorage.setItem('userdetails', JSON.stringify(userdetails));
    
    this.router.navigate(['signup-steps']);    
    */
      
    //this.router.navigate(['signup-steps']); 

  }




}
