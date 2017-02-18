import { Component, OnInit } from '@angular/core';
import { CategoriesService } from "../../../../../shared/services/categories.service";
import { Category } from "../../../../../shared/definitions/categories";

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
          if (this.category._id) {
            this.updateItemInList(this.category)
          } else {
            this.categories.push(category)
          }
          this.category = new Category()
        })
    }
  }

  onEdit(category: Category) {
    this.category = Object.assign({}, category);
  }

  onRemove({_id}: Category) {
    this.Categories
      .remove(_id)
      .subscribe(() => {
        const index = this.categories.findIndex(cat => cat._id === _id);
        this.categories.splice(index, 1);
      })
  }

  private updateItemInList(item: Category) {
    this.categories = this.categories
      .map(cat => {
        if (cat._id === item._id) {
          cat = item;
        }
        return cat;
      });
  }

}
