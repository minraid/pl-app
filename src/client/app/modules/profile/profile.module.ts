import { NgModule } from '@angular/core';

import { ProfileComponent } from './components/profile/profile.component';
import { ProfileRoutingModule } from './profile-routing';

@NgModule({
    imports: [ProfileRoutingModule],
    exports: [],
    declarations: [ProfileComponent],
    providers: [],
})
export class ProfileModule { }
