import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = "https://localhost:5001/api/products"

  constructor(
    private http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url, this.httpOptions)
  }

  getProduct(id: number): Observable<Product> {
      return this.http.get<Product>(`${this.url}/${id}`)
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.url, product)
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(this.url, product)
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

}
