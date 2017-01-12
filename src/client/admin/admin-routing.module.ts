import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportsComponent } from './components/reports/reports.component';
import { CategoriesComponent } from './components/categories/categories.component';

const routes: Routes = [
  { path: '', redirectTo: '/reports', pathMatch: 'full' },
  { path: 'reports', component: ReportsComponent},
  { path: 'categories', component: CategoriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
