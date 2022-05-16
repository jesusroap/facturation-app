import { Component, OnInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  ds!: DataSource;

  constructor(
    private customerService: CustomerService,
  ) {
    this.customerService.getAllCustomers().subscribe((data) => {
      console.log(data)
      this.ds = new DataSource({
        store: data
      })
    })
  }

  ngOnInit(): void {
  }

}
