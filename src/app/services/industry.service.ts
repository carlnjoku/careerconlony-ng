import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class IndustryService extends DataService {
  
   constructor(http:Http) { 
    super('assets/json-data/industries.json', http)
    
  }

}
