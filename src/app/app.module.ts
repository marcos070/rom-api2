import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { CustomersModule } from './customers/customers.module';
import { SharedModule } from './shared/shared.module'

@NgModule({
  declarations: [ AppComponent ],
  imports: [ BrowserModule, CustomersModule, SharedModule, CoreModule ],
  providers: [],
  //bootstrap tells angular which component is the FIST component to load
  bootstrap: [AppComponent]
})
export class AppModule { }
