import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { AdminComponent } from './admin.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { AdminRoutingModule } from './admin-routing.module';

import { ProductsModule } from './modules/products/products.module';
import { UsersModule } from './modules/users/users.module';
import { PagesModule } from './modules/pages/pages.module';
import { NewsModule } from '../app/modules/news/news.module';
import { CategoriesModule } from "./modules/categories/categories.module";
import { ReportsModule } from "./modules/reports/reports.module";

@NgModule({
  imports: [SharedModule, AdminRoutingModule, ProductsModule, UsersModule, PagesModule, NewsModule, CategoriesModule, ReportsModule],
  declarations: [AdminComponent, HeaderComponent, FooterComponent],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AdminModule {
}
