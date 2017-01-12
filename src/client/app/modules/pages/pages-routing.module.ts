import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './components/pages/pages.component';
import { FaqComponent } from './components/faq/faq.component';
import { ManualComponent } from './components/manual/manual.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: 'page', component: PagesComponent, children: [
    { path: 'faq', component: FaqComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'manual', component: ManualComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
