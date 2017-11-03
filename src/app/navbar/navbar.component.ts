import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
  
})
export class NavbarComponent implements OnInit {

  private isUserLoggedin: boolean ;

  constructor(private user:UserService) { }

  ngOnInit() {
    this.isUserLoggedin = this.user.getUserLoggedin()
  }


  logout(){
    localStorage.removeItem("isUserLoggedin");
  }


}
