import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private _http: HttpClient) {}
  fetchAllCategories(): Observable<string[]> {
    return this._http.get<string[]>(
      `${environment.API_URL}/products/categories`
    );
  }
}
