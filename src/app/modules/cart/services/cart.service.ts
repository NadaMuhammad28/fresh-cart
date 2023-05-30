import { CartProduct } from './../../products/models/cart-product';
import { UtilityService } from './../../../shared/utility/utility.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartKey = 'myCart';

  constructor(private util: UtilityService) {}

  getCartFromLocalStorage(): CartProduct[] {
    const cart: CartProduct[] =
      this.util.readFromLocalStorage<CartProduct[]>(this.cartKey) || [];
    console.log(cart);
    return cart;
  }
  addToCart(product: CartProduct): void {
    const cart = this.getCartFromLocalStorage();
    console.log('ser', cart);

    const existingProduct = cart.find((p) => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity = +existingProduct.quantity + +product.quantity;
    } else {
      cart.push(product);
    }
    this.util.writeToLocalStorage(this.cartKey, cart);
  }
}
