import { NgxSpinnerService } from 'ngx-spinner';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/modules/products/models/cart-product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cart!: CartProduct[];
  emptyCart = false;
  isLoaded = false;
  constructor(
    private _cartService: CartService,
    private _spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.getCartFromLocalStorage();
  }

  private getCartFromLocalStorage() {
    this._spinner.show();
    this.cart = this._cartService.getCartFromLocalStorage();
    console.log(this.cart);

    if (!this.cart) {
      this.emptyCart = true;
    }

    this._spinner.hide();
  }
}
