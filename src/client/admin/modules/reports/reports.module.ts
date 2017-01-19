import { NgModule } from '@angular/core';
import { ReportsComponent } from "./components/reports/reports.component";
import { SharedModule } from "../../../shared/shared.module";
import { ReportsRoutingModule } from "./reports-routing.module";
import { ReportsService } from "./service/reports.service";

@NgModule({
    imports: [SharedModule, ReportsRoutingModule],
    exports: [],
    declarations: [ReportsComponent],
    providers: [ReportsService],
})
export class ReportsModule { }
