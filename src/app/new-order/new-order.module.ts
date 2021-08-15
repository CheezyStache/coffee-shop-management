import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewOrderComponent } from './new-order/new-order.component';
import { CategoryItemComponent } from './categories/category-item/category-item.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductItemComponent } from './products/product-item/product-item.component';
import { AddonsListComponent } from './addons-list/addons-list.component';
import { AddonItemComponent } from './addons/addon-item/addon-item.component';
import { ParametersItemComponent } from './parameters/parameters-item/parameters-item.component';
import { ParametersListComponent } from './parameters-list/parameters-list.component';
import { CatalogService } from './catalog/catalog.service';
import { CartModule } from './cart/cart.module';

const routes: Routes = [
  {
    path: 'new-order',
    component: CategoryListComponent,
    children: [
      {
        path: ':categoryName',
        component: ProductsListComponent,
        children: [
          {
            path: ':productName/parameters',
            component: ParametersListComponent,
          },
          {
            path: ':productName/addons',
            component: ParametersListComponent,
          },
        ],
      },
    ],
  },
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
  imports: [
    CommonModule,
    RouterModule,
    CartModule,
    RouterModule.forChild(routes),
  ],
  providers: [CatalogService],
  exports: [RouterModule],
})
export class NewOrderModule {}
