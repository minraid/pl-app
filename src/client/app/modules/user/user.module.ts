import { NgModule } from '@angular/core';

import { SharedModule } from "../../../shared/shared.module";
import { ProfileRoutingModule } from './user-routing';

import { ProfileComponent } from './components/profile/profile.component';

import { FinanceModule } from "../finance/finance.module";

@NgModule({
    imports: [SharedModule, ProfileRoutingModule, FinanceModule],
    exports: [],
    declarations: [ProfileComponent],
    providers: [],
})
export class UserModule { }
