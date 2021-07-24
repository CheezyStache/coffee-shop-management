import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { NewOrderModule } from './new-order/new-order.module';

@NgModule({
  declarations: [AppComponent, MenuComponent, MenuItemComponent],
  imports: [BrowserModule, AppRoutingModule, NewOrderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
