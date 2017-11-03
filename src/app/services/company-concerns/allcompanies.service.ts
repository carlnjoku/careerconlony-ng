import { DataService } from '../data.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AllCompanyService extends DataService {
  
   constructor(http:Http) { 
    super('http://localhost:8082/all-compnaies', http)
  }

}
