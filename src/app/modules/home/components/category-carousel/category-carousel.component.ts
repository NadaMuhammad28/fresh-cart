import { CategoryService } from './../../../category/services/category.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-category-carousel',
  templateUrl: './category-carousel.component.html',
  styleUrls: ['./category-carousel.component.scss'],
})
export class CategoryCarouselComponent implements OnInit {
  categories!: string[];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoWidth: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 2,
      },
      740: {
        items: 3,
      },
    },
  };
  constructor(private _categoryService: CategoryService) {}

  ngOnInit() {
    this.fetchAllCategories();
  }

  private fetchAllCategories() {
    let self = this;
    let subscriber = {
      next(categories: string[]) {
        self.categories = categories;
        console.log(categories);
      },
      error(err: string) {
        console.log(err);
        alert(err);
      },
      complete() {
        console.log('completed');
      },
    };
    this._categoryService.fetchAllCategories().subscribe(subscriber);
  }
}
