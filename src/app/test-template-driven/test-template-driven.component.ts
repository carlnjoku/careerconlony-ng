import { Component, OnInit, ViewChild } from '@angular/core';
import { Signup } from './signup'

@Component({
  selector: 'app-test-template-driven',
  templateUrl: './test-template-driven.component.html',
  styleUrls: ['./test-template-driven.component.css']
})

export class TestTemplateDrivenComponent implements OnInit {

  model: Signup = new Signup();
  @ViewChild('f') form: any;

  langs: string[] = [
    'English',
    'French',
    'German',
  ];

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.valid) {
      console.log("Form Submitted!");
      this.form.reset();
    }
  }

}



