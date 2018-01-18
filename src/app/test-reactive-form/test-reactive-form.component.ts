import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl} from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'app-test-reactive-form',
  templateUrl: './test-reactive-form.component.html',
  styleUrls: ['./test-reactive-form.component.css']
})
export class TestReactiveFormComponent implements OnInit {

  searchField: FormControl; 
  searches: string[] = []; 

  constructor() { }

  ngOnInit() {
    this.searchField = new FormControl();
    this.searchField.valueChanges
        .debounceTime(400)
        .distinctUntilChanged()
        .subscribe(term => {
          this.searches.push(term);
        });
  }

  
}
