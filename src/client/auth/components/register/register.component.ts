import { Component } from '@angular/core';
import { FormControl } from "@angular/forms";
import { AuthService } from "../../services/auth.service";

@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  private countries: any = ['States'];
  private nickRes: boolean;
  private user: any = {
    contacts: {}
  };

  constructor(private Auth: AuthService) {
  }

  submit(form: FormControl) {
    if (form.valid) {
      this.Auth.signUp(this.user)
        .subscribe(data => alert(`Your password: ${data}`),
          () => alert('Email has been used'))
    }
  }

  checkNick() {
    if (this.user.nickname) {
      this.Auth.checkNick(this.user.nickname)
        .subscribe(data => this.nickRes = data)
    }
  }

}
