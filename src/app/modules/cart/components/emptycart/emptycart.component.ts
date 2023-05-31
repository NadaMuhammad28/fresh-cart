import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emptycart',
  templateUrl: './emptycart.component.html',
  styleUrls: ['./emptycart.component.scss'],
})
export class EmptycartComponent {
  constructor(private _router: Router) {}

  onClick() {
    this._router.navigateByUrl('products');
  }
}
