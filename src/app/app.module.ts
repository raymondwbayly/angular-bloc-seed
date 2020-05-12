import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {  HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { HttpClientModule} from '@angular/common/http';
import { GatewayInterceptor } from '../core/interceptors/error.interceptor'

// adding browser animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Adding the modules for the material modules we want to use
import { MaterialModule } from './material.module';

// Imports the Main Application Component (This manages the layout for the application)
import { AppComponent } from './app.component';

// Imports the Routing Module, this manages the initial route setting
import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [
  ],
  entryComponents: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule { }
