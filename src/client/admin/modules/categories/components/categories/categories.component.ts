import { Component, OnInit } from '@angular/core';
import { CategoriesService } from "../../services/categories.service";
import { Category } from "../../categories";

@Component({
  templateUrl: 'categories.component.html'
})
export class CategoriesComponent implements OnInit {
  private categories: Category[];
  private category: Category = new Category();

  constructor(private Categories: CategoriesService) {
  }

  ngOnInit() {
    this.Categories
      .retrieve()
      .subscribe(categories => this.categories = categories)
  }

  onSubmit(form) {
    if (form.valid) {
      this.Categories
        .save(this.category)
        .subscribe(category => {
          this.category = new Category();
          this.categories.push(category)
        })
    }
  }

  onRemove({_id}: Category) {
    this.Categories
      .remove(_id)
      .subscribe(() => {
        const index = this.categories.findIndex(cat => cat._id === _id);
        this.categories.splice(index, 1);
      })
  }

}
