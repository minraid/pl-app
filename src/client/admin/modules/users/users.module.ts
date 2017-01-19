import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';

import { UsersComponent } from './components/users/users.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserComponent } from './components/user/user.component';
import { UsersService } from "./services/users.service";

@NgModule({
    imports: [SharedModule, UsersRoutingModule],
    exports: [],
    declarations: [UsersComponent, UserListComponent, UserComponent],
    providers: [UsersService],
})
export class UsersModule { }
