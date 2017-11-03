import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class IpService extends DataService {
  
   constructor(http:Http) { 
    //super('https://jsonplaceholder.typicode.com/posts', http)
    super('http://ip-api.com/json', http)
  }

}