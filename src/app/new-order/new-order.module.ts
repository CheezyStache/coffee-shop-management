import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewOrderComponent } from './new-order/new-order.component';
import { CategoryItemComponent } from './category-item/category-item.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'category', pathMatch: 'full' },
  { path: 'category', component: CategoryListComponent },
  { path: ':categoryName', component: ProductsListComponent },
];

@NgModule({
  declarations: [
    NewOrderComponent,
    CategoryItemComponent,
    CategoryListComponent,
    ProductsListComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class NewOrderModule {}
