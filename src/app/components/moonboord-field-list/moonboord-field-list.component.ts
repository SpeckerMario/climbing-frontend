import { Component, OnInit } from '@angular/core';
import { MoonboardFieldService } from 'src/app/services/moonboard-field.service';
import { MoonboardField } from 'src/app/common/moonboard-field';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moonboord-field-list',
  templateUrl: './moonboord-field-list-grid.component.html',
  styleUrls: ['./moonboord-field-list.component.css']
})
export class MoonboordFieldListComponent implements OnInit {

  currentRouteId!: number;
  moonboardFields!: MoonboardField[];

  constructor(private moonboardFieldService: MoonboardFieldService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listMoonboardFields();
    });

  }

  listMoonboardFields() {

    const hasRouteId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasRouteId) {
      // get the "id" param string. convert string to a number using the "+" symbol
      this.currentRouteId = +this.route.snapshot.paramMap.get('id')!;
    }
    else {
      // not category id available ... default to category id 1
      this.currentRouteId = 1;
    }
      this.moonboardFieldService.getMoonboardFieldList(this.currentRouteId).subscribe(
        data => {
          this.moonboardFields = data;
        }
      )
    }

  }


