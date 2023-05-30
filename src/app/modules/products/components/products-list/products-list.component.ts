import { Product } from '../../models/product';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  subscriptions: Subscription[] = [];
  constructor(private _productService: ProductService) {}
  ngOnInit() {
    this.fetchAllProduct();
  }

  fetchAllProduct() {
    let self = this;
    let subscriber = {
      next(productsList: Product[]) {
        self.products = productsList;
        console.log(productsList);
      },
      error(err: string) {
        console.log(err);
        alert(err);
      },
      complete() {
        console.log('completed');
      },
    };
    let subscription = this._productService
      .fetchProduct()
      .subscribe(subscriber);
    this.subscriptions.push(subscription);

    console.log(this.products);
  }

  ngOnDestroy() {
    // for (let s of this.subscriptions) {
    //   s.unsubscribe();
    // }
  }
}
