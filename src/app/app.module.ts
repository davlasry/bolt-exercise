import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ListComponent } from './components/list/list.component';
import { ThumbComponent } from './components/thumb/thumb.component';
import { SingleProductComponent } from './components/single-product/single-product.component';

@NgModule({
  declarations: [AppComponent, ProductsComponent, ListComponent, ThumbComponent, SingleProductComponent],
  imports: [BrowserModule, AppRoutingModule, FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
