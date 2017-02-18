import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../shared/services/user.service";

@Component({
  selector: 'header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {
  constructor(private UserService: UserService) {
  }

  ngOnInit() {
  }

  logout(e) {
    e.preventDefault();
    this.UserService.logout()
      .subscribe(res => console.log(res))
  }
}
