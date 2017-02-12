import { Component } from '@angular/core';
import { FormControl } from "@angular/forms";
import { AuthService } from "../../services/auth.service";

@Component({
  templateUrl: 'forgot.component.html'
})
export class ForgotComponent {
  private email: string;

  constructor(private Auth: AuthService) {
  }

  submit(form: FormControl) {
    if (form.valid) {
      this.Auth.forgot(this.email)
        .subscribe(data => alert(`Your password: ${data}`))
    }
  }
}
