import { Component, OnInit } from '@angular/core';
import { MoonboardRoute } from 'src/app/common/moonboard-route';
import { MoonboardFieldService } from 'src/app/services/moonboard-field.service';

@Component({
  selector: 'app-moonboard-route-menu',
  templateUrl: './moonboard-route-menu.component.html',
  styleUrls: ['./moonboard-route-menu.component.css']
})
export class MoonboardRouteMenuComponent implements OnInit {

  moonboardRoutes!: MoonboardRoute[];
  displayedColumns: string[] = ['routeName', 'routeGrade'];
  clickedRows = new Set<MoonboardRoute>();

  constructor(private moonboardFieldService: MoonboardFieldService) { }

  ngOnInit(): void {
    this.listMoonboardRoute();
  }

  listMoonboardRoute() {
    this.moonboardFieldService.getMoonboardRouteList().subscribe(
      data => {
        this.moonboardRoutes = data;
      });
  }

}
