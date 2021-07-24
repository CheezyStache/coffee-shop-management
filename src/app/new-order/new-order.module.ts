import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewOrderComponent } from './new-order/new-order.component';
import { CategoryItemComponent } from './category-item/category-item.component';
import { CategoryListComponent } from './category-list/category-list.component';



@NgModule({
  declarations: [
    NewOrderComponent,
    CategoryItemComponent,
    CategoryListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NewOrderModule { }
