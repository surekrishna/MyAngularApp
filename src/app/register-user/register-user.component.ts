import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  userProfile: any;
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  zipCode: string;
  city: string;
  password: string;
  confirmPassword: string;
  
  registerForm = new FormGroup({
    firstName : new FormControl ('',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
    lastName : new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
    emailAddress: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10)]),
    zipCode: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
    city: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),  
    password: new FormControl('',[Validators.required, Validators.pattern('^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$')]),
    confirmPassword: new FormControl('',[Validators.required, Validators.pattern('^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$')])
  });

  constructor() {  
  }

  ngOnInit() {
  }
  
  registerUser(userProfile){
    console.log(userProfile.value);
    // this.firstName = userProfile.firstName;
    // this.lastName = userProfile.lastName;
    // this.emailAddress = userProfile.emailAddress;
    // this.phoneNumber = userProfile.phoneNumber;
    // this.zipCode = userProfile.zipCode;
    // this.city = userProfile.city;
    // this.country = userProfile.country;
    // console.log(userProfile);
  }
    

}
