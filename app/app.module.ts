import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ProductFilterPipe } from './products/product-filter.pipe';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';

import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { StarComponent } from './shared/star.component';

@NgModule({
  imports: [ 
  	BrowserModule,
  	FormsModule,
    HttpModule,
    RouterModule.forRoot([
        { path: 'products', component: ProductListComponent },
        { path: 'product/:id', component: ProductDetailComponent },
        { path: 'welcome', component: WelcomeComponent },
        { path: '', redirectTo: 'welcome', pathMatch: 'full' },
        { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
      ])
  ],
  declarations: [
  	AppComponent,
  	ProductListComponent,
  	ProductFilterPipe,
    StarComponent,
    WelcomeComponent,
    ProductDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
