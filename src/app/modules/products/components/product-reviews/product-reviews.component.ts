import { Component, Input, OnInit } from '@angular/core';
import { Rating } from '../../models/product';

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.scss'],
})
export class ProductReviewsComponent implements OnInit {
  @Input() productRating!: Rating | undefined;

  constructor() {}

  ngOnInit() {
    console.log(this.productRating);
  }
}
