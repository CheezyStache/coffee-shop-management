import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { NewOrderComponent } from './new-order/new-order/new-order.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'new-order', component: NewOrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
