import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { ReportsModule } from './reports/reports.module';
import { PagesModule } from './pages/pages.module';
import { ProfileModule } from './profile/profile.module';
import { NewsModule } from './news/news.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
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
