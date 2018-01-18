import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, transition, style, keyframes, query, stagger } from '@angular/animations';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import 'rxjs/Rx';
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
  searchform: FormGroup;
  jobTitle: FormControl; 
  location: FormControl; 
  //jobType: FormControl; 
  searches: string[] =[]
 
  constructor() { }

  ngOnInit() {
    this.createFormControls()
    this.createForm()
  }

  createFormControls() { 
    this.jobTitle = new FormControl('', Validators.required);
    this.location = new FormControl('', Validators.required);
    //this.jobType = new FormControl('', Validators.required);
  }
  
  createForm() { 
    this.searchform = new FormGroup({
      jobTitle: this.jobTitle,
      location: this.location,
      //jobType: this.jobType
    });
  }

  onJobSearch(){
      if(this.searchform.valid){
      console.log('Tritrrtr', this.searchform.value)
        //this.searchform.reset()
      }
  }

    jobSearch(term: string){
    console.log(term)
      /*this.jobTitle = new FormControl();
      this.jobTitle.valueChanges
          .debounceTime(400)
          .distinctUntilChanged()
          .subscribe(term => {
            this.searches.push(term);
          });
        */
        this.jobTitle.valueChanges
        .debounceTime(800)
        .distinctUntilChanged()
      }

}
