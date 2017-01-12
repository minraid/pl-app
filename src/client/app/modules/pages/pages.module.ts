import { NgModule } from '@angular/core';

import { PagesComponent } from './components/pages/pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { FaqComponent } from './components/faq/faq.component';
import { ContactComponent } from './components/contact/contact.component';
import { ManualComponent } from './components/manual/manual.component';

@NgModule({
    imports: [PagesRoutingModule],
    exports: [],
    declarations: [PagesComponent, FaqComponent, ContactComponent, ManualComponent],
    providers: [],
})
export class PagesModule { }
