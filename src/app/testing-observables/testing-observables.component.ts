import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { TestServiceService } from '../test-service.service'
import 'rxjs/Rx'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switch';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-testing-observables',
  templateUrl: './testing-observables.component.html',
  styleUrls: ['./testing-observables.component.css'],
  
})
export class TestingObservablesComponent implements OnInit {

  private loading: boolean = false;
  private results;
  private searchField: FormControl;
  
  constructor(private user:TestServiceService) { }

  ngOnInit() {

    this.searchField = new FormControl();
    this.searchField.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .map(term => this.user.search(term))
      .subscribe(obs => {
        //obs.subscribe(other => this.results)
        obs.subscribe(other => console.log(other))
      } ); // Need to call subscribe to make it hot!
    /*
    this.searchField.valueChanges
    .debounceTime(600)
    .distinctUntilChanged()
    .subscribe(term=> {
      this.searches.push(term)
    })
    */
  }
/*
  doSearch(term:string) {
    this.user.search(term)
  }
*/

}
