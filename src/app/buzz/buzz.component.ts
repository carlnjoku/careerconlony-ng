import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { trigger, state, animate, transition, style, keyframes, query, stagger } from '@angular/animations';
import { UserService } from '../services/user.service'
import { ExperienceService } from '../services/experience.service'
import { Http, Response } from '@angular/http';
import 'rxjs';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'buzz',
  templateUrl: './buzz.component.html',
  styleUrls: ['./buzz.component.css'],
  animations:[
    trigger('testanimation', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1)',
      })),
      transition('small <=> large', animate('600ms ease-in', keyframes([
        style({opacity:0})
      ])))
    ]),

    trigger('imganimate', [
      transition('* => *', [
        query('img', style({ opacity: 0})),

        query('img', stagger('60ms', [
          animate('600ms 1.3s ease-out', style({ opacity:1}))
        ]))
      ])
    ]),

    trigger('page', [
      transition('* => *', [
        query('.page-content', style({ opacity: 0})),

        query('.page-content', stagger('30ms', [
          animate('600ms 1.2s ease-out', style({ opacity:1}))
        ]))
      ])
    ]),

    trigger('share', [
      transition('* => *', [
        query('.panel-flat', style({ opacity: 0})),

        query('.panel-flat', stagger('30ms', [
          animate('600ms 1.7s ease-out', style({ opacity:1}))
        ]))
      ])
    ]),


  ]
})
export class BuzzComponent implements OnInit {

@Input() myval
 result=[]
 //url =''
 base_url = 'https://api.embedly.com/1/oembed?'
 wee: any;
 isShareLinkThought: boolean = false
 isSharePhoto: boolean = false
 isShareVideo: boolean = false
 isShareDefault: boolean = true
  
 isUserLoggedin
 session
 post = {
          title:'This is a sample post',
          likeCount: 14,
          isLiked:true
        }
  userDetails: any[]
  firstname
  lastname
  email
  memberID
  showSelected : boolean;

  public loginForm = this.fb.group({
    email: ["", Validators.required],
    profilephoto: ["", Validators.required],
    password: ["", Validators.required]
  });

  constructor(public fb: FormBuilder, private http:Http, private user:UserService, private expService:ExperienceService) { 
    this.showSelected = false;
  }

  onLikeChanged(isLiked){
    console.log('Post was liked:', isLiked)
  }

  ngOnInit() {
    /*
    this.user.getAll()
      .subscribe(posts =>  this.posts = posts)
    */

    console.log(this.myval)
 
    console.log(this.user.getUserLoggedin())
    
    let details = JSON.parse(localStorage.getItem("userdetails"));
    this.session = details;
    console.log(this.session)
    
    this.memberID = details.memberID;
    let memberID = this.session.map(item => item.memberID)
    this.memberID = memberID[0]
    console.log(this.memberID)
    this.email = details.email;
    let email = this.session.map(item => item.email)
    this.email = email[0]

    
    this.user.getMember(this.memberID).subscribe((res => {this.userDetails = res}))
    this.user.getUserWithExperience(this.memberID)
    .subscribe((res => {this.wee = res} ))
       
    this.user.getUserWithExperience(this.memberID)
    .subscribe((res => console.log(res)))
    
  
  }

  
  shareThoughtLinik(){
    this.isShareLinkThought = true
    //this.isSharePhoto = false
    //this.isShareVideo = false
    //this.isShareDefault = false
  }
  /*
  sharePhoto(){
    this.isSharePhoto = true
    this.isShareLinkThought = false
    this.isShareVideo = false
    this.isShareDefault = false
  }
  shareVideo(){
    this.isShareVideo = true
    this.isSharePhoto = false
    this.isShareLinkThought = false
    this.isShareDefault = false
  }
  */

  
  onPaste(data:string){
    
    //d2f283608a3b4fa4a6ba77b522d4e26d
    let full_url = this.base_url+'url='+data+'&key=1d5c48f7edc34c54bdae4c37b681ea2b&autoplay=true'
    this.http.get(full_url).map(res => res.json()).subscribe(data => {
      this.result = data;
      console.log(this.result)

    });

  }

  doLogin(event) {
    console.log(event);
    console.log(this.loginForm.value);
  }

  onPasted(event){
    console.log(event)
  }


  
}
