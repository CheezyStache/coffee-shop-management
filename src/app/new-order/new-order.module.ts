import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewOrderComponent } from './new-order/new-order.component';
import { CategoryItemComponent } from './category-item/category-item.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductItemComponent } from './product-item/product-item.component';
import { AddonsListComponent } from './addons-list/addons-list.component';
import { AddonItemComponent } from './addon-item/addon-item.component';
import { ParametersItemComponent } from './parameters-item/parameters-item.component';
import { ParametersListComponent } from './parameters-list/parameters-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'category', pathMatch: 'full' },
  { path: 'category', component: CategoryListComponent },
  { path: ':categoryName', component: ProductsListComponent },
  { path: ':categoryName/:productName', component: AddonsListComponent },
];

@NgModule({
  declarations: [
    NewOrderComponent,
    CategoryItemComponent,
    CategoryListComponent,
    ProductsListComponent,
    ProductItemComponent,
    AddonsListComponent,
    AddonItemComponent,
    ParametersItemComponent,
    ParametersListComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class NewOrderModule {}
