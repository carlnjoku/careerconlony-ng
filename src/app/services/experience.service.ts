import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ExperienceService extends DataService {
  
   constructor(http:Http) { 
    super('http://localhost:8087/get-experience/memberID', http)
  }

}