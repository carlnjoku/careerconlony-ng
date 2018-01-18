import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';



@Injectable()
export class UserService extends DataService {

  constructor(http:Http) { 
    super('http://localhost:8086/get-user/memberID', http)
  }

}



