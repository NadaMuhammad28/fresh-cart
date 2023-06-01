import { Component, Input } from '@angular/core';
import { CartProduct } from 'src/app/modules/products/models/cart-product';

@Component({
  selector: 'app-cartdetails',
  templateUrl: './cartdetails.component.html',
  styleUrls: ['./cartdetails.component.scss'],
})
export class CartdetailsComponent {
  @Input() cart!: CartProduct[];
}
