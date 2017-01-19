import { Component, OnInit } from '@angular/core';
import { UsersService, IUser } from "../../services/users.service";
import { Observable } from "rxjs";

@Component({
    templateUrl: 'user-list.component.html'
})
export class UserListComponent implements OnInit {
    private users: Observable<IUser[]>;

    constructor(private Users: UsersService) { }

    ngOnInit() {
      this.users = this.Users.retrieve();
    }

}
