import { Component, OnInit } from '@angular/core';
import { CategoriesService } from "../../services/categories.service";
import { ICategory } from "../../categories";
import { Observable } from "rxjs";

@Component({
  templateUrl: 'categories.component.html'
})
export class CategoriesComponent implements OnInit {
  private categories: Observable<ICategory[]>;

  constructor(private Categories: CategoriesService) {
  }

  ngOnInit() {
    this.categories = this.Categories.retrieve();
  }

}
