import { Injectable } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


class SearchItem {
  constructor(public firstname:String, 
              public lastname:string, email:string ){

  }
}
@Injectable()
export class TestServiceService {

  apiUrl = 'http://localhost:8086/search-user';
  results: SearchItem[];
  loading: boolean
  constructor(private http:Http) { 
    this.results=[]
    this.loading = false

  }
  
  search(term:string): Observable<SearchItem[]> {
    let api = `${this.apiUrl}/term/${term}`
    return this.http.get(api)
      .map(res=> {
        return res.json().map(item =>{
          return new SearchItem( 
            item.firstname,
            item.lastname,
            item.email
          );
        })
      })
  }
}
