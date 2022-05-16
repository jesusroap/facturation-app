import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Detail } from '../models/detail';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  url = "https://localhost:5001/api/Details"

  constructor(
    private http: HttpClient
  ) { }

  getAllDetails(): Observable<Detail[]> {
    return this.http.get<Detail[]>(this.url);
  }
}
