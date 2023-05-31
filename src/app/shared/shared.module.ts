import { AppRoutingModule } from './../app-routing.module';
import { AngularMaterialModule } from './../angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavLinksComponent } from './components/nav-links/nav-links.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { AuthButtonsComponent } from './components/auth-buttons/auth-buttons.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, ErrorPageComponent, NavLinksComponent, SocialLinksComponent, AuthButtonsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    AppRoutingModule,
  ],
  exports: [NavbarComponent, FooterComponent, ErrorPageComponent],
})
export class SharedModule {}
