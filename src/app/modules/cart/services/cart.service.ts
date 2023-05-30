import { CartProduct } from './../../products/models/cart-product';
import { UtilityService } from './../../../shared/utility/utility.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartKey = 'myCart'; // change this to your own cart key

  constructor(private util: UtilityService) {}

  getCartFromLocalStorage(): CartProduct[] {
    const cart: CartProduct[] =
      this.util.readFromLocalStorage<CartProduct[]>('cart') || [];
    console.log(cart);
    return cart;
  }
  addToCart(product: CartProduct): void {
    const cart = this.getCartFromLocalStorage();
    const existingProduct = cart.find((p) => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += product.quantity;
    } else {
      cart.push(product);
    }
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }
}
