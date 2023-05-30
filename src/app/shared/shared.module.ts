import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, ErrorPageComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [NavbarComponent, FooterComponent, ErrorPageComponent],
})
export class SharedModule {}
