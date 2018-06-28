import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  userProfile: any;
  emailAddress: string;
  password: string;

  loginForm = new FormGroup({
    emailAddress: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required])
  });

  constructor() { }

  ngOnInit() {
  }

  loginUser(userProfile){
      console.log(userProfile.value);
      if(userProfile.dirty && userProfile.valid){
        console.log("Call Service here");
      }
  }


}
