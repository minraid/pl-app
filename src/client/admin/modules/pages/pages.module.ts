import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';

import { PagesComponent } from './components/pages/pages.component';
import { PagesListComponent } from './components/pages-list/pages-list.component';
import { PageComponent } from './components/page/page.component';
import { ContactComponent } from './components/contact/contact.component';
import { FaqComponent } from './components/faq/faq.component';

@NgModule({
    imports: [SharedModule, PagesRoutingModule],
    exports: [],
    declarations: [PagesComponent, PagesListComponent, PageComponent, ContactComponent, FaqComponent],
    providers: [],
})
export class PagesModule { }
