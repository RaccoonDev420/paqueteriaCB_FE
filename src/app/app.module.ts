import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { PrimeNgModule } from './shared/prime-ng/prime-ng.module';
import { HomeComponent } from './components/home/home.component';
import { ApiModule, Configuration, ConfigurationParameters } from './shared/openapi';
import { environment } from './enviroments/enviroment';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { JwtService } from './shared/service/JwtService';


export function apiConfigFactory(): Configuration {
  const params: ConfigurationParameters = {
    // set configuration parameters here.
    credentials: { JWT: localStorage.getItem("jwtToken") },
    basePath: environment.API_URL
  };

  return new Configuration(params);
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    PrimeNgModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ApiModule.forRoot(apiConfigFactory)
  ],
  providers: [
    JwtService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
