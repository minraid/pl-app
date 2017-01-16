import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DataTableComponent } from './components/data-table/data-table.component';
import { HttpModule } from "@angular/http";

@NgModule({
    imports: [BrowserModule, CommonModule, FormsModule, HttpModule],
    exports: [BrowserModule, CommonModule, FormsModule, DataTableComponent],
    declarations: [DataTableComponent],
    providers: [],
})
export class SharedModule { }
