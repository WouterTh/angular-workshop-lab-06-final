import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_CONFIG, LOCAL_CONFIG } from './app.config';
import { LoadDataService } from './data/services/load-data.service';
import { ToolbarModule } from './shared/toolbar/toolbar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // HTTP Client after Browser Module
    HttpClientModule,
    ToolbarModule,
    AppRoutingModule
  ],
  providers: [
    { provide: APP_CONFIG, useValue: LOCAL_CONFIG },
    LoadDataService.provider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
