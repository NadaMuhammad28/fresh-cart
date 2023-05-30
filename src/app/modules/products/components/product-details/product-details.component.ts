import { CartService } from './../../../cart/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CartProduct } from '../../models/cart-product';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productQuantity: string = '1';
  productDetails!: Product;
  constructor(
    private _productService: ProductService,
    private route: ActivatedRoute,
    private _cartService: CartService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    const id = this.getParamID();
    console.log(id);
    if (id) this.fetchProductById(id);
  }

  fetchProductById(id: string) {
    const self = this;
    const subscriber = {
      next(productDetails: Product) {
        self.productDetails = productDetails;
        console.log(self.productDetails);
      },
      error(err: string) {
        console.log(err);
        // alert(err);
      },
      complete() {
        console.log('completed');
      },
    };

    this._productService.fetchProductById(id).subscribe(subscriber);
  }

  getParamID(): string | null {
    const id = this.route.snapshot.paramMap.get('id');
    // log the ID to the console
    return id;
  }
  prepareCartProduct(): CartProduct {
    return {
      id: this.productDetails.id,
      title: this.productDetails.title,
      price: this.productDetails.price,
      image: this.productDetails.image,
      quantity: this.productQuantity,
      category: this.productDetails.category,
    };
  }
  onAddToCart() {
    const product = this.prepareCartProduct();
    console.log(product);

    this._cartService.addToCart(product);
    this.toastr.success(
      `${this.productQuantity} item${
        +this.productQuantity > 1 ? 's' : ''
      } added to cart`
    );
  }
}
