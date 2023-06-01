import { ProductsModule } from './../products/products.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '' }];

@NgModule({
  imports: [RouterModule.forChild(routes), ProductsModule],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
