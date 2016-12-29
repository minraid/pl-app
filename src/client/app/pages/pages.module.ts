import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { ManualComponent } from './manual/manual.component';

@NgModule({
    imports: [PagesRoutingModule],
    exports: [],
    declarations: [PagesComponent, FaqComponent, ContactComponent, ManualComponent],
    providers: [],
})
export class PagesModule { }
