import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { DataTableComponent } from './components/data-table/data-table.component';

import { CalendarComponent } from "./components/calendar/calendar.component";
import { ReportsParametersComponent } from "./components/reports-parameters/reports-parameters.component";

import { OrdersService } from "./services/orders.service";
import { ProductsService } from "./services/products.service";

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule, HttpModule],
  exports: [BrowserModule, CommonModule, FormsModule, DataTableComponent, CalendarComponent, ReportsParametersComponent],
  declarations: [DataTableComponent, CalendarComponent, ReportsParametersComponent],
  providers: [ProductsService, OrdersService],
})
export class SharedModule {}
