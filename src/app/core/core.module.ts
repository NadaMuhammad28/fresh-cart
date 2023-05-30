import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';

// firebaseauth
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// components
import { RegisterComponent } from './components/register/register.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    AngularFireModule.initializeApp(environment.FIREBASE_CONFIG),
    AngularFireAuthModule,
  ],
})
export class CoreModule {}
