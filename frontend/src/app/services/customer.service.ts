import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url = "https://localhost:5001/api/Customer"

  constructor(
    private http: HttpClient
  ) { }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.url)
  }
}
