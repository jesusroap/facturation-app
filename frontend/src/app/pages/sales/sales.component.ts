import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import DataSource from 'devextreme/data/data_source';
import { DetailService } from 'src/app/services/detail.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  ds!: DataSource;

  constructor(
    private detailService: DetailService,
    private router: Router,
    private _location: Location,
  ) {
    this.detailService.getAllDetails().subscribe((data) => {
console.log(data)
      this.ds = new DataSource({
        store: data
      })
    })
  }

  ngOnInit(): void {
  }

}
