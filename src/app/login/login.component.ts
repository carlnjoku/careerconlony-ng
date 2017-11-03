import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { trigger, state, animate, transition, style, keyframes, query, stagger } from '@angular/animations';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
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
export class LoginComponent implements OnInit {
  
  model: any = {};
  
  loading = false;
  error = '';
  isUserLoggedin: boolean;
  

  form = new FormGroup({
    email: new FormControl('', [
        Validators.required,
        Validators.email
        //Validators.minLength(4)
    ]),
    password: new FormControl('', Validators.required)
  })

  
  constructor(private user:UserService, private router:Router) { }

  ngOnInit() {
    // Check if user is already logged, if yes redirect to buzz page else load the home page
    this.isUserLoggedin = this.user.getUserLoggedin()
    console.log(this.isUserLoggedin)
    //if(this.isUserLoggedin){
      //this.router.navigate(['/buzz'])
    //}else{
      //this.router.navigate(['/login'])
    
  }

  login(){

    this.user.userLogin(this.form.value)
        .subscribe(result => {
          console.log(result) 
          
          if (result === true) {
                this.isUserLoggedin = true
                this.router.navigate(['/buzz']);
            } else {
                this.error = 'Username or password is incorrect';
                this.loading = false; 
            }
          
    });
  }

  get email(){
    return this.form.get('email');
  }

  get password(){
    return this.form.get('password');
  }

}
