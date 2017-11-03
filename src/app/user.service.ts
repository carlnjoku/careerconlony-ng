import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {
  public token: string;
  private isUserLoggedin ;
  private username ;
  mydata = [];
  Companies;
  private itemsEndpoint = 'https://jsonplaceholder.typicode.com/posts';
  private headers = new Headers({'Content-type':'application/json'})


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

  

}
