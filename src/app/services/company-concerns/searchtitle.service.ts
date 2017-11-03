import { DataService } from '../data.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SearchTitleService extends DataService {
  
   constructor(http:Http) { 
    super('http://localhost:8080/get-titles/position', http)
  }

}
