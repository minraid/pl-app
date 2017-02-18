import { NgModule } from '@angular/core';
import { CategoriesComponent } from "./components/categories/categories.component";
import { SharedModule } from "../../../shared/shared.module";
import { CategoriesRoutingModule } from "./categories-routing.module";

@NgModule({
  imports: [SharedModule, CategoriesRoutingModule],
  declarations: [CategoriesComponent],
  providers: []
})
export class CategoriesModule {
}
