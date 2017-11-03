import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignupValidator } from '../signup/signup.validators'
import { Router } from '@angular/router';
import { UserService } from '../services/user.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
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


  form_signup = new FormGroup({
    firstname: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        SignupValidator.cannotContainSpace
    ]),
    lastname: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        SignupValidator.cannotContainSpace
    ]),
    email_signup: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(6),
        SignupValidator.shouldBeUnique,
        SignupValidator.cannotContainSpace 
    ]),
    password_signup: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
    ]),
    terms_signup: new FormControl('', [
        Validators.required
    ])
  })

  get firstname(){
    return this.form_signup.get('firstname');
  }
  get lastname(){
    return this.form_signup.get('lastname');
  }
  get email_signup(){
    return this.form_signup.get('email_signup');
  }
  get password_signup(){
    return this.form_signup.get('password_signup');
  }
  get terms_signup(){
    return this.form_signup.get('terms_signup');
  }


  constructor(private user:UserService, private router:Router) { }

  /*
  login(){
    
    //var email = this.form.get('email')
    var email = 'carl@yahoo.com'
    var password = 'pass'
    //console.log(email)
    if(email === 'carl@yahoo.com' && password ==='pass'){
      this.user.setUserLoggedin()
      //this.router.navigate(['buzz'])
    }else{
      this.router.navigate(['/'])
    }
    
    
    this.form.setErrors({
        invalidLogin:true
      })

      // Store userID in storage
      var isLoggedin = true;
      localStorage.setItem('isLoggedin', "isLoggedin");
    
      
  }

*/
  login(){
    this.loading = true;
        this.user.userLogin(this.form.value)
            .subscribe(result => {
                if (result) {
                    // Store user deatils in storage
                    localStorage.setItem('userdetails', JSON.stringify(result));
                    console.log(result)
                    // Store deatils in storage
                    localStorage.setItem('isUserLoggedin', 'true');
                    this.router.navigate(['/buzz']);
                } else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                    console.log(this.error)
                    
                }
            });
  }

  get email(){
    return this.form.get('email');
  }

  get password(){
    return this.form.get('password');
  }

  /** Signup Validaton  */

  
  signup(){
    
  }
  
  ngOnInit() {
    // Check if user is already logged, if yes redirect to buzz page 
    //else load the home page
    this.isUserLoggedin = this.user.getUserLoggedin()
    console.log(this.isUserLoggedin)
    if(this.isUserLoggedin){
      this.router.navigate(['/buzz'])
    }else{
      this.router.navigate(['/'])
    }
  }

}
