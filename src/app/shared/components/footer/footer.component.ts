import { PaymentPartner } from './../../models/payment-partner';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  paymentPartnersLogos: PaymentPartner[];
  constructor() {
    this.paymentPartnersLogos = [
      { id: 1, image: 'assets/footerIcons/amazon-pay.png', alt: 'amazon pay' },
      {
        id: 2,
        image: 'assets/footerIcons/american-express.png',
        alt: 'american express',
      },
      { id: 3, image: 'assets/footerIcons/paypal.png', alt: 'paypal' },
    ];
  }

  trackByFn(index: number, PaymentPartner: PaymentPartner) {
    return PaymentPartner.id;
  }
}
