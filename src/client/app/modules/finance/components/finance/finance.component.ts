import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../user/services/user.service";
import { User } from "../../../../../shared/definitions/users";

@Component({
  selector: 'finance',
  templateUrl: 'finance.component.html'
})
export class FinanceComponent implements OnInit {
  private user: User = new User();
  private collaboration: number = 0;
  private amount: number;

  constructor(private UserService: UserService) {
  }

  ngOnInit() {
    this.UserService.get()
      .subscribe(user => {
        this.user = user;
        const timeDiff = Math.abs(new Date().getTime() - new Date(this.user.registerDate).getTime());
        this.collaboration = Math.ceil(timeDiff / (1000 * 3600 * 24));
        this.calculateAmount();
      })
  }

  private calculateAmount() {
    this.amount = this.user.orders.reduce((sum, order) => {
      return sum + order.amount;
    }, 0)
  }

}
