import { AngularMaterialModule } from './../../angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { EmptycartComponent } from './components/emptycart/emptycart.component';
import { CartdetailsComponent } from './components/cartdetails/cartdetails.component';
import { CartComponent } from './pages/cart/cart.component';

@NgModule({
  declarations: [EmptycartComponent, CartdetailsComponent, CartComponent],
  imports: [CommonModule, CartRoutingModule, AngularMaterialModule],
})
export class CartModule {}
