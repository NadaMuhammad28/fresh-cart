import { ToastrService } from 'ngx-toastr';
import { PaymentPartner } from './../../models/payment-partner';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  paymentPartnersLogos: PaymentPartner[];
  appLinkForm!: FormGroup;
  emailValidationError!: string;
  constructor(private _toastrService: ToastrService) {
    this.paymentPartnersLogos = [
      { id: 1, image: 'assets/footerIcons/amazon-pay.png', alt: 'amazon pay' },
      {
        id: 2,
        image: 'assets/footerIcons/american-express.png',
        alt: 'american express',
      },
      { id: 3, image: 'assets/footerIcons/paypal.png', alt: 'paypal' },
    ];
    this.emailValidationError = 'enter a valid email';
  }
  ngOnInit() {
    this.prepareEmailForm();
  }

  private prepareEmailForm() {
    this.appLinkForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }
  onSubmit() {
    this._toastrService.success('Email Sent!');
    this.appLinkForm.reset();
  }
  displayErrorMessage(formControleName: string): boolean {
    return (
      this.appLinkForm.get(formControleName)!.touched &&
      this.appLinkForm.get(formControleName)!.invalid
    );
  }
  trackByFn(index: number, PaymentPartner: PaymentPartner) {
    return PaymentPartner.id;
  }
}
