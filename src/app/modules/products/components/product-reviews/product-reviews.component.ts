import { Component, Input, OnInit } from '@angular/core';
import { Rating } from '../../models/product';

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.scss'],
})
export class ProductReviewsComponent {
  @Input() productRating: any = { rate: 0, count: 0 };
  heartUrls = {
    empty: '../assets/heart-empty.svg',
    half: '../assets/heart-half.svg',
    full: '../assets/heart-full.svg',
  };

  constructor() {}
}
