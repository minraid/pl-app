import { NgModule } from '@angular/core';

import { SharedModule } from "../../../shared/shared.module";
import { AuthRoutingModule } from "./auth-routing.module";

import { ForgotComponent } from "./components/forgot/forgot.component";
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";
import { AuthHeaderComponent } from "./components/header/header.component";
import { AuthFooterComponent } from "./components/footer/footer.component";

import { AuthService } from "./services/auth.service";

@NgModule({
  imports: [SharedModule, AuthRoutingModule],
  exports: [],
  declarations: [RegisterComponent, LoginComponent, ForgotComponent, AuthHeaderComponent, AuthFooterComponent],
  providers: [AuthService],
})
export class AuthModule {
}
