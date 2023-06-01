import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _http: HttpClient) {}
  fetchAllProducts(category: string | null): Observable<Product[]> {
    if (category) {
      return this.fetchAllProductsByCategory(category);
    } else {
      return this._http.get<Product[]>(`${environment.API_URL}/products`).pipe(
        retry(2),
        catchError((error) => {
          return throwError(
            'Error fetching products. Please try again later.'
          ) as Observable<Product[]>;
        })
      );
    }
  }
  fetchAllProductsByCategory(category: string): Observable<Product[]> {
    return this._http
      .get<Product[]>(`${environment.API_URL}/products/category/${category}`)
      .pipe(
        retry(2),
        catchError((error) => {
          return throwError(
            'Error fetching products. Please try again later.'
          ) as Observable<Product[]>;
        })
      );
  }
  fetchProductById(id: string): Observable<Product> {
    return this._http
      .get<Product>(`${environment.API_URL}/products/${id}`)
      .pipe(
        retry(2),
        catchError((error) => {
          return throwError('Error fetching product') as Observable<Product>;
        })
      );
  }
}
