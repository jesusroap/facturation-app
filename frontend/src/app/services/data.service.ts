import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { Customer } from '../models/customer';
import { Detail } from '../models/detail';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = "https://localhost:5001/api"

  constructor(
    private http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  //Products
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/products`, this.httpOptions)
  }

  getProduct(id: number): Observable<Product> {
      return this.http.get<Product>(`${this.url}/products/${id}`)
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.url}/products`, product)
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.url}/products`, product)
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.url}/products/${id}`);
  }

  //Details
  getAllDetails(): Observable<Detail[]> {
    return this.http.get<Detail[]>(`${this.url}/details`);
  }

  //Customers
  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.url}/customer`)
  }

}
