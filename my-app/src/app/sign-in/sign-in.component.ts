import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInForm;
  userMap;
  key;
  value;
  signInKey;
  signInValue;
  signInCheck = false;


  ngOnInit() {
    this.userMap = [
      {key: 'username', value: 'password'},
      {key: 'test2'}
    ];
  }

  addUser(){
        this.userMap.push(
          {key: this.key, value: this.value}
        );
  }

  checkUser(){
    for (let i = 0; i < this.userMap.length; i++) {
      if (this.signInKey === this.userMap[i].key && this.signInValue === this.userMap[i].value){
        this.signInCheck = true;
        document.getElementById('signIn').innerHTML = this.signInKey;
      }
    }
  }

  constructor(
    private formBuilder: FormBuilder,

  ) {
    this.signInForm = this.formBuilder.group({
      key: '',
      value: ''
    });
   }

}
