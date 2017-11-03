import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, transition, style, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
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


  ]
  
})
export class JobsComponent implements OnInit {

  id = 3
  constructor() { }

  ngOnInit() {
    
  }

}
