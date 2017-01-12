import { NgModule }      from '@angular/core';
import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

import { ProductsModule } from './modules/products/products.module';
import { OrdersModule } from './modules/orders/orders.module';
import { ReportsModule } from './modules/reports/reports.module';
import { PagesModule } from './modules/pages/pages.module';
import { ProfileModule } from './modules/profile/profile.module';
import { NewsModule } from './modules/news/news.module';

@NgModule({
  imports: [
    SharedModule,
    AppRoutingModule,
    ProductsModule,
    OrdersModule,
    ReportsModule,
    NewsModule,
    PagesModule,
    ProfileModule
  ],
  declarations: [AppComponent, HomeComponent, FooterComponent, HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
