import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from './menu/menu.module';
import { NewOrderModule } from './new-order/new-order.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NewOrderModule, MenuModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
