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
import { CatalogService } from './catalog.service';
import { CartModule } from '../cart/cart.module';

export const routes: Routes = [
  { path: '', redirectTo: 'category', pathMatch: 'full' },
  { path: 'category', component: CategoryListComponent },
  { path: 'products/:categoryName', component: ProductsListComponent },
  {
    path: 'parameters/:productName/:cartItemId',
    component: ParametersListComponent,
  },
  { path: 'addons/:productName/:cartItemId', component: AddonsListComponent },
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
  imports: [CommonModule, RouterModule, CartModule],
  providers: [CatalogService],
})
export class NewOrderModule {}
