import { NgxSpinnerService } from 'ngx-spinner';
import { UtilityService } from './../../../shared/utility/utility.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private _authService: AuthService,
    private _utilityService: UtilityService,
    private _router: Router,
    private _spinner: NgxSpinnerService, 
        private toastr: ToastrService

  ) {}
  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  onSubmit() {
    this._spinner.show();
    this.login();
  }
  private async login() {
    try {
      const userCredential = await this._authService.signInWihEmailAndPassword(
        this.loginForm.value
      );
      const { user } = userCredential;
      const token = await user?.getIdToken();
      if (token) this._utilityService.writeToLocalStorage<string>('token', token);
      this.toastr.success(
      "logged In Succssefuly!"
    );
      this._router.navigateByUrl('');
    } catch (e: any) {
      console.log(e.message);
    } finally {
      console.log('completed');
      this._spinner.hide();
    }
  }
}
