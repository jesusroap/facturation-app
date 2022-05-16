import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import DataSource from 'devextreme/data/data_source';
import { Location } from '@angular/common';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  ds!: DataSource;

  constructor(
    private service: DataService,
    private router: Router,
    private _location: Location,
  ) {
    this.service.getAllDetails().subscribe((data) => {
console.log(data)
      this.ds = new DataSource({
        store: data
      })
    })
  }

  ngOnInit(): void {
  }

}
