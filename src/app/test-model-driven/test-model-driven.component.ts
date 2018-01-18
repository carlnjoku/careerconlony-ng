import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-model-driven',
  templateUrl: './test-model-driven.component.html',
  styleUrls: ['./test-model-driven.component.css']
})
export class TestModelDrivenComponent implements OnInit {
  myform: FormGroup;
  firstname: FormControl; 
  lastname: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;
  langs =['English', 'French', 'German']
  constructor() { }

  ngOnInit() {
    /*
    this.myform = new FormGroup({
      name: new FormGroup({ 
        firstname: new FormControl('', Validators.required), 
        lastname: new FormControl('', Validators.required),
    }),
      email: new FormControl('', Validators.pattern("[^ @]*@[^ @]*")),
      password: new FormControl('', [
        Validators.minLength(8), 
        Validators.required]),
      language: new FormControl()
    })
    */

    this.createFormControls();
    this.createForm();
  }
  createFormControls() { 
    this.firstname = new FormControl('', Validators.required);
    this.lastname = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.language = new FormControl('', Validators.required);
  }

  createForm() { 
    this.myform = new FormGroup({
      name: new FormGroup({
        firstname: this.firstname,
        lastname: this.lastname,
      }),
      email: this.email,
      password: this.password,
      language: this.language
    });
  }

  onSubmit(){
    if(this.myform.valid){
      console.log(this.myform.value)
      this.myform.reset()
    }
  }
}
