import { Component, OnInit } from '@angular/core';
import { MoonboardRoute } from 'src/app/common/moonboard-route';
import { MoonboardRouteService } from 'src/app/services/moonboard-route.service';

@Component({
  selector: 'app-moonboard-route-list',
  templateUrl: './moonboard-route-list-table.component.html',
  styleUrls: ['./moonboard-route-list.component.css']
})
export class MoonboardRouteListComponent implements OnInit {

  moonboardRoutes!: MoonboardRoute[];
  displayedColumns: string[] = ['routeName', 'routeGrade'];
  clickedRows = new Set<MoonboardRoute>()

  constructor(private moonboardRouteService : MoonboardRouteService) { }

  ngOnInit(): void {
    this.listMoonboardRoutes();
  }

  listMoonboardRoutes(){
    this.moonboardRouteService.getMoonboardRouteList().subscribe(
      data => {
        this.moonboardRoutes = data;
      }
    )
  }

}
