import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './components/users/users.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: 'users', component: UsersComponent,
    children: [{
      path: '', component: UserListComponent
    }, {
      path: ':id', component: UserComponent
    }, {
      path: 'new', component: UserComponent
    }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {
}
