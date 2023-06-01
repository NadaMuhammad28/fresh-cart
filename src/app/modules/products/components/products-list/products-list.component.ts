import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
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
  isProductRoute = false;
  constructor(
    private _productService: ProductService,
    private _spinner: NgxSpinnerService,
    private _toastr: ToastrService,
    private _route: ActivatedRoute
  ) {}
  ngOnInit() {
    const routeConfig = this._route.snapshot.routeConfig;
    if (routeConfig && routeConfig.path) {
      this.isProductRoute = routeConfig.path.startsWith('products');
      console.log(this.isProductRoute);
    }
    const category = this.getParamCategory();
    console.log(category);

    this.fetchAllProduct(category);
  }

  private fetchAllProduct(category: string | null) {
    let self = this;
    let subscriber = {
      next(productsList: Product[]) {
        self.products = productsList;
      },
      error(error: string) {
        self._toastr.error(error);
        self._spinner.hide();
      },
      complete() {
        self._spinner.hide();
      },
    };
    self._spinner.show();

    let subscription = this._productService
      .fetchAllProducts(category)
      .subscribe(subscriber);
    this.subscriptions.push(subscription);
  }

  private getParamCategory(): string | null {
    const category = this._route.snapshot.paramMap.get('category');
    return category;
  }
  ngOnDestroy() {
    for (let s of this.subscriptions) {
      s.unsubscribe();
    }
  }
}
