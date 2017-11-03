import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, transition, style, keyframes, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-select-industry',
  templateUrl: './select-industry.component.html',
  styleUrls: ['./select-industry.component.css'],
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

    trigger('industryanimation', [
      transition('* => *', [
        query('.btn', style({ opacity: 0, transform:'translateX(-40px)'})),

        query('.btn', stagger('30ms', [
          animate('600ms 1.1s ease-out', 
            style({ opacity:1, transform:'translateX(0px)'})
          )
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
export class SelectIndustryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
