import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../../../shared/services/user.service";
import { User } from "../../../../../shared/definitions/users";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'profile',
  templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit {
  private user: User = new User();

  constructor(private UserService: UserService) {
  }

  ngOnInit() {
    this.UserService.get()
      .subscribe(user => Object.assign(this.user, user))
  }

  submit(form: FormControl) {
    if (form.valid) {
      this.UserService.updateUser(this.user)
        .subscribe(() => {})
    }
  }

}
