import { Component, OnInit } from '@angular/core';
import { Firebase1Service } from '../services/firebase1.service';
import { trigger, state, animate, transition, style, keyframes, query, stagger } from '@angular/animations';
//import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post1',
  templateUrl: './post1.component.html',
  styleUrls: ['./post1.component.css'],
  animations:[
      trigger('page', [
      transition('* => *', [
        query('.page-content', style({ opacity: 0})),

        query('.page-content', stagger('30ms', [
          animate('600ms 1.2s ease-out', style({ opacity:1}))
        ]))
      ])
    ]),
  ]
})
export class Post1Component implements OnInit {
  title: any ;
  message: any ;
  image: any ;
  post:  Array<any> = [];

  constructor(private firebase1Service: Firebase1Service) { }

  ngOnInit() {
  }

  onSubmit(){
    let post = {title:this.title, message: this.message}
    this.firebase1Service.addPost(post)
  }
}
