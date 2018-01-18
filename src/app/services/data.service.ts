import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { AppError }  from '../common/app-error'
import { NotFoundError }  from '../common/not-found-error'
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs/Rx'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/forkJoin';


@Injectable()
export class DataService {
  public token: string;
  private isUserLoggedin ;
  private username ;
  mydata = [];
  Companies;

  constructor(private url: string, private http:Http) { 
    this.isUserLoggedin = false
  }

  embedly(data){
    return this.http.get(this.url)
      .map(response => response.json())
  }
  
  
  getAll(){
    return this.http.get(this.url)
      .map(response => response.json())
  }
  getSingle(id){
    return  this.http.get(this.url+'/'+ id)
      .map(response => response.json())
      .catch((error: Response) =>{
        if (error.status === 404)
        return Observable.throw(new NotFoundError());
      return Observable.throw(new AppError());
      });
  }


getUserWithExperience(id: number): Observable<any> {
  return this.http.get('http://localhost:8086/get-experience/memberID/' + id)
    .map((res: any) => res.json())
    .flatMap((exp: any) => {
      return this.http.get('http://localhost:8086/get-user/memberID/' + id)
        .map((res: any) => {
          let member = res.json();
          exp.member = member;
          return exp;
        });
    });
}

  getMember(memberId){
    //let headers = new Headers({ 'Content-Type': 'application/json'});
    return  this.http.get(this.url+'/'+ memberId)
      .map(response => response.json())
      .catch((error: Response) =>{
        if (error.status === 404)
        return Observable.throw(new NotFoundError());
      return Observable.throw(new AppError());
      });
  }
  create(resource){
   
    let headers = new Headers({ 'Content-Type': 'application/json'});
    //let options = new RequestOptions({ headers: headers });
    return  this.http.post(this.url, JSON.stringify(resource), { headers: headers } )
        .map(response => response.json())
  }

  update(resource){
    let headers = new Headers({ 'Content-Type': 'application/json'});
    return this.http.put(this.url, JSON.stringify(resource), { headers: headers })
        .map(response => response.json())
  }

  delete(id){
    return  this.http.delete(this.url+'/'+ id)
      .map(response => response.json())
      .catch((error: Response) =>{
        if (error.status === 404)
        return Observable.throw(new NotFoundError());
      return Observable.throw(new AppError());
      });
  }

  companySearch(term){
     return  this.http.get(this.url+'/'+ term)
      .map(response => response.json())
  }
  
  titleSearch(term){
     return  this.http.get(this.url+'/'+ term)
      .map(response => response.json())
      //.debounceTime(1000)
  }

  getIp(){
    return this.http.get(this.url)
      .map(response => response.json())
  }
  getFields(){
    return this.http.get(this.url)
      .map(response => response.json())
  }
  getAllIndustry(){
    return this.http.get(this.url)
      .map(response => response.json())
  }

  errMsg(err){
    console.log('Oops there thier seem to be an error here!')
  }


  userLogin(resource) {
        let headers = new Headers({ 'Content-Type': 'application/json'});
        return this.http.post('http://localhost:8086/login', JSON.stringify(resource),  { headers: headers })
           .map(response => response.json())         
  }

  userLogout(){
    localStorage.removeItem("isUserLoggedin");
  }


  getUserLoggedin(){
    this.isUserLoggedin = JSON.parse(localStorage.getItem("isUserLoggedin"));
    return this.isUserLoggedin
  }

  
  



}
