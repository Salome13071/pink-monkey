import { Injectable } from "@angular/core";
import { ProductItemDto } from "../app/dtos/ProductItemDto";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class ProductService {
  public filtredList: ProductItemDto[] = [];
  public productList: ProductItemDto[] = []

    constructor(private http:HttpClient){
        this.filtredList = this.productList
    }

getProductList(): Observable<ProductItemDto[]>{
  return this.http.get('https://665c79663e4ac90a04d9a6d5.mockapi.io/pinkmonkey/pinkmonkey') as Observable<ProductItemDto[]>
}

filterProducts(key: string, value:any): Observable<ProductItemDto[]>{
  return this.http.get(`https://665c79663e4ac90a04d9a6d5.mockapi.io/pinkmonkey/pinkmonkey?${key}=${value}`) as Observable<ProductItemDto[]>
}
    
}