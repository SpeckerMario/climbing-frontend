import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { MoonboardRouteListComponent } from './components/moonboard-route-list/moonboard-route-list.component';
import { MoonboardRouteService } from './services/moonboard-route.service';

@NgModule({
  declarations: [
    AppComponent,
    MoonboardRouteListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MoonboardRouteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
