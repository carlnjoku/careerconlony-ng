import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { UserService } from './services/user.service'

@Injectable()
export class AuthGuard implements CanActivate {
  email ;
  isUserLoggedin;
  constructor(private router:Router, private user:UserService){}
  
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('Just checking if you are logged in.')
   
    
    return this.user.getUserLoggedin();
    

    
  }
}
