import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class SignupService {
  public token: string;
  private isUserLoggedin ;
  private newuser: any;
 
  private itemsEndpoint = 'http://localhost:8086/new-member';
  

  constructor(private http:Http) { 
    this.isUserLoggedin = false
  }

  userLogout(){
    localStorage.removeItem("isUserLoggedin");
  }

  /*
  setUserLoggedin(){
    var isUserLoggedin = true
    localStorage.setItem('isUserLoggedin', JSON.stringify(isUserLoggedin));
  }
  */
  getUserLoggedin(){
    this.isUserLoggedin = JSON.parse(localStorage.getItem("isUserLoggedin"));
    return this.isUserLoggedin
  }

  createUser(resource){
  
    let headers = new Headers({ 'Content-Type': 'application/json'});
    //let options = new RequestOptions({ headers: headers });
    return  this.http.post(this.itemsEndpoint, JSON.stringify(resource), { headers: headers } )
        .map(response => response.json())
  }

  

  

}

