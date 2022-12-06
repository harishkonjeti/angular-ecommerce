import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  baseUrl ='http://localhost:8080/api/products';

  getProductList():Observable<any>{
    return this.http.get(this.baseUrl).pipe(
      tap((data)=>console.log("Data fetched"+JSON.stringify(data)))
    );
  }
}
