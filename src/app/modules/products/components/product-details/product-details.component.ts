import { NgxSpinnerService } from 'ngx-spinner';
import { CartService } from './../../../cart/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  noProductFound = false;
  constructor(
    private _productService: ProductService,
    private _route: ActivatedRoute,
    private _cartService: CartService,
    private _toastr: ToastrService,
    private _spinner: NgxSpinnerService,
    private _router: Router
  ) {}

  ngOnInit() {
    this._spinner.show();
    const id = this.getParamID();
    if (id) this.fetchProductById(id);
    else {
      this._router.navigateByUrl('products');
    }
  }

  private fetchProductById(id: string) {
    const self = this;
    const subscriber = {
      next(productDetails: Product) {
        self.productDetails = productDetails;
      },
      error(error: string) {
        self._toastr.error(error);
        self.noProductFound = true;
        self._spinner.hide();
        self._router.navigateByUrl('');
      },
      complete() {
        self._spinner.hide();
      },
    };

    this._productService.fetchProductById(id).subscribe(subscriber);
  }

  private getParamID(): string | null {
    const id = this._route.snapshot.paramMap.get('id');
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
    this._cartService.addToCart(product);
    this._toastr.success(
      `${this.productQuantity} item${
        +this.productQuantity > 1 ? 's' : ''
      } added to cart`
    );
  }
}
