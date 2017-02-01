import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { User } from "../../../../../shared/definitions/users";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  templateUrl: 'user.component.html'
})
export class UserComponent implements OnInit {
  private user: User = new User();

  constructor(private Users: UsersService, private Route: ActivatedRoute) {
  }

  ngOnInit() {
    this.Route.params.subscribe((params: Params) => {
      const {id} = params;
      this.Users.get(id).subscribe((user: User) => {
        this.user = Object.assign(this.user, user);
      });
    })
  }

  onSubmit(form) {
    this.Users.save(this.user)
      .subscribe(data => console.log(data))
  }

}
