import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';
import { MoonboardRouteListComponent } from './components/moonboard-route-list/moonboard-route-list.component';
import { MoonboardRouteService } from './services/moonboard-route.service';
import { Routes, RouterModule} from '@angular/router'

const routes: Routes = [
  {path: 'moonboard-routes/:id', component: MoonboardRouteListComponent},
  {path: 'moonboard-routes', component: MoonboardRouteListComponent},
  {path: 'moonboard-fields', component: MoonboardRouteListComponent},
  {path: '', redirectTo:'/moonboard-routes', pathMatch:'full'},
  {path: '**', redirectTo:'/moonboard-routes', pathMatch:'full'}
];



@NgModule({
  declarations: [
    AppComponent,
    MoonboardRouteListComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    
  ],
  providers: [MoonboardRouteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
