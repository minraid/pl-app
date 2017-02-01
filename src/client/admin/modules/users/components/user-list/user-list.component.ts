import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { Observable } from "rxjs";
import { User } from "../../../../../shared/definitions/users";
import { Router } from "@angular/router";

@Component({
  templateUrl: 'user-list.component.html'
})
export class UserListComponent implements OnInit {
  private users: Observable<User[]>;
  private columns = [{
    key: 'firstName',
    title: 'First Name'
  }, {
    key: 'lastName',
    title: 'Last Name'
  }, {
    key: 'nickname',
    title: 'Nick Name'
  }, {
    key: 'finances.deposit',
    title: 'Deposit'
  }, {
    key: 'finances.credit',
    title: 'Credit'
  }, {
    key: 'finances.loanBalance',
    title: 'Loan Balance'
  }, {
    key: 'finances.creditLine',
    title: 'Credit Line'
  }, {
    key: 'orders',
    title: 'Orders'
  }];

  constructor(private Users: UsersService, private Router: Router) {
  }

  ngOnInit() {
    this.users = this.Users.retrieve();
  }

  onSelect({_id}: User) {
    this.Router.navigate(['/users', _id]);
  }

}
