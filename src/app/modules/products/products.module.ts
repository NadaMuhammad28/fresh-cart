import { ToastrModule } from 'ngx-toastr';
import { AngularMaterialModule } from './../../angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FormsModule } from '@angular/forms';
import { ProductReviewsComponent } from './components/product-reviews/product-reviews.component';
import { UsdToEgpPipe } from './pipes/usd-to-egp.pipe';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    ProductReviewsComponent,
    UsdToEgpPipe,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ProductsRoutingModule,
    FormsModule,
    ToastrModule.forRoot(), // ToastrModule added
  ],
  exports: [ProductsListComponent],
})
export class ProductsModule {}
