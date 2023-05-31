import { Component } from '@angular/core';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss'],
})
export class SocialLinksComponent {
  socialMediaLinks = [
    {
      id: 1,
      path: '',
      name: 'instagram',
      iconSrc: 'assets/navIcons/icon-instagram.svg',
    },
    {
      id: 2,
      path: '',
      name: 'facebook',
      iconSrc: 'assets/navIcons/icon-facebook.svg',
    },
    {
      id: 3,
      path: '',
      name: 'twitter',
      iconSrc: 'assets/navIcons/icon-twitter.svg',
    },
  ];
}
