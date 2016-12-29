import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { FaqComponent } from './faq/faq.component';
import { ManualComponent } from './manual/manual.component';
import { ContactComponent } from './contact/contact.component';

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
