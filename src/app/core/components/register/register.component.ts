import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerationFormFields!: any[];
  registerForm!: FormGroup;
  constructor() {
    this.registerationFormFields = [
      {
        id: 1,
        name: 'name',
        placeHolder: 'Name',
      },
      {
        id: 2,
        name: 'email',
        placeHolder: 'Email',
      },
      {
        id: 3,
        name: 'password',
        placeHolder: 'Password',
        type: 'password',
      },
      {
        id: 4,
        name: 'repassword',
        placeHolder: 'Re-enter Password',
        type: 'password',
      },
      {
        id: 5,
        name: 'phone',
        placeHolder: 'Phone Number',
        type: 'tel',
      },
    ];
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  onSubmit() {
    console.log(this.registerForm);
    // Implement your login logic here
  }
}
