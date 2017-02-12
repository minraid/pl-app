import { Component } from '@angular/core';
import { FormControl } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
    templateUrl: 'login.component.html'
})
export class LoginComponent {
  private user: any = {};

  constructor(private Auth: AuthService, private Router: Router) {
  }

  submit(form: FormControl) {
    if (form.valid) {
      this.Auth.signIn(this.user)
        .subscribe(data => {
          if (!data) {
            return alert('wrong email or password')
          }
          this.Router.navigate(['/'])
        })
    }
  }

}
