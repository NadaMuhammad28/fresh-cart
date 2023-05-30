import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _http: HttpClient) {}
  fetchProduct(): Observable<Product[]> {
    return this._http.get<Product[]>(`${environment.API_URL}/products`);
  }

  fetchProductById(id: string): Observable<Product> {
    return this._http.get<Product>(`${environment.API_URL}/products/${id}`);
  }
}
