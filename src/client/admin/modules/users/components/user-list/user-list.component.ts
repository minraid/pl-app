import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { Observable } from "rxjs";
import { IUser } from "../../users";

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
