import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './components/pages/pages.component';
import { PagesListComponent } from './components/pages-list/pages-list.component';
import { PageComponent } from './components/page/page.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {
    path: 'pages', component: PagesComponent,
    children: [{
      path: '', component: PagesListComponent
    }, {
      path: ':id', component: PageComponent
    }, {
      path: 'new', component: PageComponent
    }, {
      path: 'faq', component: FaqComponent
    }, {
      path: 'contact', component: ContactComponent
    }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
