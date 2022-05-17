import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHttpService } from './services/app-http.service';
import { MapsService } from './services/maps.service';
import { CitiesComponent } from './cities/cities.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyCddXNCeGKz2W_bzbBjGnB3eBjjqmBMYLo',
    // })
  ],
  providers: [AppHttpService, MapsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
