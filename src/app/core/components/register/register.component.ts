import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TextField } from '../../models/textField';
import { AuthService } from '../../services/auth.service';
import { passwordMatch } from '../../validators/passwordMatchValidator';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerationFormFields!: TextField[];
  registerForm!: FormGroup;
  constructor(private _authService: AuthService ,      private _router: Router,
   private _spinner: NgxSpinnerService,         private toastr: ToastrService
) {
    this.registerationFormFields = [
      {
        id: 1,
        name: 'name',
        placeHolder: 'Name',
        type: 'text',
      },
      {
        id: 2,
        name: 'email',
        placeHolder: 'Email',
        type: 'text',
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
      name: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      repassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        // passwordMatch('password', 'repassword'),
      ]),
      phone: new FormControl(''),
    });
  }
  onSubmit() {
    this._spinner.show()
    // Implement your login logic here
    this.register();
  }

  private async register() {
    try {
      const email = this.registerForm.get('email')?.value
      const password = this.registerForm.get('password')?.value
      const res = await this._authService.registerWithEmailAndPassword(
        email,
        password
      );

        this.toastr.success(
      "Registered Succssefuly!"
    );
          this._router.navigateByUrl('');

       
    } catch (e: any) {
      console.log(e.message);
    }

    finally{
  this._spinner.hide()
    }
  }
}
