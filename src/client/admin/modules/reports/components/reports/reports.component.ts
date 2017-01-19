import { Component, OnInit } from '@angular/core';
import { ReportsService } from "../../service/reports.service";
import { Observable } from "rxjs";

@Component({
  templateUrl: 'reports.component.html'
})
export class ReportsComponent implements OnInit {
  private reports: Observable<any[]>;

  constructor(private Reports: ReportsService) {
  }

  ngOnInit() {
    this.reports = this.Reports.get({test: 'test', test2: 'test2'});
  }

}
