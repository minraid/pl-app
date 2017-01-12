import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReportsComponent } from './components/reports/reports.component';

import { ProductsModule } from './modules/products/products.module';
import { CategoriesComponent } from './components/categories/categories.component';
import { UsersModule } from './modules/users/users.module';
import { PagesModule } from './modules/pages/pages.module';
import { NewsModule } from '../app/modules/news/news.module';

@NgModule({
  imports: [SharedModule, AdminRoutingModule, ProductsModule, UsersModule, PagesModule, NewsModule],
  declarations: [AdminComponent, HeaderComponent, FooterComponent, ReportsComponent, CategoriesComponent],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AdminModule {
}
