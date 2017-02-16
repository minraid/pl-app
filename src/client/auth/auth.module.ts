import { NgModule }      from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';

import { AuthComponent }  from './auth.component';
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";
import { ForgotComponent } from "./components/forgot/forgot.component";

import { AuthService } from "./services/auth.service";

@NgModule({
  imports: [
    SharedModule,
    AuthRoutingModule,
  ],
  declarations: [AuthComponent, RegisterComponent, LoginComponent, ForgotComponent, FooterComponent, HeaderComponent],
  providers: [AuthService],
  bootstrap: [AuthComponent]
})
export class AuthModule {}
