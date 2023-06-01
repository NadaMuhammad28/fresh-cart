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
  constructor(
    private _productService: ProductService,
    private _spinner: NgxSpinnerService,
    private _toastr: ToastrService,
    private _route: ActivatedRoute
  ) {}
  ngOnInit() {
    const category = this.getParamCategory();

    if (category) this.fetchAllProduct(category);
  }

  private fetchAllProduct(category: string) {
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
