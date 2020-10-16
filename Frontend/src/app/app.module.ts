import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule} from 'angular-datatables';
import { ProviderComponent } from './modules/provider/provider.component';
import { ViewproviderComponent } from './modules/provider/viewprovider/viewprovider.component';
import { NgxSocialShareModule } from 'ngx-social-share';
@NgModule({
  declarations: [
    AppComponent,
    ProviderComponent,
    ViewproviderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    NgxSocialShareModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
