import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.scss'],
})
export class NavLinksComponent {
  links = [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: '/cart', name: 'Cart' },
    { id: 3, path: '/products', name: 'Products' },
  ];
}
