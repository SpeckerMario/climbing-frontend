import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';
import { Routes, RouterModule} from '@angular/router';
import { MoonboordFieldListComponent } from './components/moonboord-field-list/moonboord-field-list.component'
import { MoonboardFieldService } from './services/moonboard-field.service';
import { MoonboardRouteMenuComponent } from './components/moonboard-route-menu/moonboard-route-menu.component';

const routes: Routes = [
  {path: 'moonboard-routes/:id', component: MoonboordFieldListComponent},
  {path: 'moonboard-routes', component: MoonboordFieldListComponent},
  
 // {path: '', redirectTo:'/moonboard-routes', pathMatch:'full'},
 // {path: '**', redirectTo:'/moonboard-routes', pathMatch:'full'}
];



@NgModule({
  declarations: [
    AppComponent,
    MoonboardRouteMenuComponent,
    MoonboordFieldListComponent,
    MoonboardRouteMenuComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    
  ],
  providers: [MoonboardFieldService],
  bootstrap: [AppComponent]
})
export class AppModule { }
