import { ProductsModule } from './../products/products.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CategoryCarouselComponent } from './components/category-carousel/category-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [HomeComponent, CategoryCarouselComponent],
  imports: [CommonModule, HomeRoutingModule, ProductsModule, CarouselModule],
})
export class HomeModule {}
