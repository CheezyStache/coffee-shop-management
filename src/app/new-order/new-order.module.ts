import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogService } from './catalog/catalog.service';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ParametersListComponent } from './parameters/parameters-list/parameters-list.component';
import { AddonsListComponent } from './addons/addons-list/addons-list.component';
import { CategoryItemComponent } from './categories/category-item/category-item.component';
import { ProductItemComponent } from './products/product-item/product-item.component';
import { ParametersItemComponent } from './parameters/parameters-item/parameters-item.component';
import { AddonItemComponent } from './addons/addon-item/addon-item.component';
import { HttpClientModule } from '@angular/common/http';
import { NewOrderComponent } from './new-order.component';
import { NewOrderRoutingModule } from './new-order-routing-module';

@NgModule({
  declarations: [
    NewOrderComponent,
    CategoryListComponent,
    CategoryItemComponent,
    ProductsListComponent,
    ProductItemComponent,
    ParametersListComponent,
    ParametersItemComponent,
    AddonsListComponent,
    AddonItemComponent,
  ],
  imports: [CommonModule, NewOrderRoutingModule, HttpClientModule],
  providers: [CatalogService],
  exports: [NewOrderComponent],
  bootstrap: [],
})
export class NewOrderModule {}
