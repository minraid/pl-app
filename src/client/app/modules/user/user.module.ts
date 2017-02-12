import { NgModule } from '@angular/core';

import { SharedModule } from "../../../shared/shared.module";
import { ProfileRoutingModule } from './user-routing';

import { ProfileComponent } from './components/profile/profile.component';

import { UserService } from "./services/user.service";

@NgModule({
    imports: [SharedModule, ProfileRoutingModule],
    exports: [],
    declarations: [ProfileComponent],
    providers: [UserService],
})
export class UserModule { }
