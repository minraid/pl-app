import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DataTableComponent } from './components/data-table/data-table.component';
import { HttpModule } from "@angular/http";
import { ProductsService } from "./services/products.service";
import { OrdersService } from "./services/orders.service";
import { SelectObjectComponent } from "./components/select-object/select-object.component";

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule, HttpModule],
  exports: [BrowserModule, CommonModule, FormsModule, DataTableComponent, SelectObjectComponent],
  declarations: [DataTableComponent, SelectObjectComponent],
  providers: [ProductsService, OrdersService],
})
export class SharedModule {}
