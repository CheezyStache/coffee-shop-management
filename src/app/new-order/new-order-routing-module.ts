import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddonsListComponent } from './addons/addons-list/addons-list.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { ParametersListComponent } from './parameters/parameters-list/parameters-list.component';
import { ProductsListComponent } from './products/products-list/products-list.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryListComponent,
  },
  {
    path: ':categoryId',
    component: ProductsListComponent,
  },
  {
    path: 'parameters/:productId',
    component: ParametersListComponent,
  },
  {
    path: 'addons/:productId',
    component: AddonsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewOrderRoutingModule {}
