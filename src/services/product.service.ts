import { Injectable } from "@angular/core";
import { ProductItemDto } from "../app/dtos/ProductItemDto";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { __values } from "tslib";
import { CartItemDto } from "../app/dtos/cartItemDto";

@Injectable({ providedIn: 'root' })
export class ProductService {

  public productList: ProductItemDto[] = [];
  public cartList: CartItemDto[] = [];
  public favoriteList: string[] = [];

  constructor(private http: HttpClient) {
    this.favoriteList = this.getFavorites();
  }

  getProductList(): Observable<ProductItemDto[]> {
    return this.http.get('https://665c79663e4ac90a04d9a6d5.mockapi.io/pinkmonkey/products') as Observable<ProductItemDto[]>
  }

  getProduct(id: string): Observable<ProductItemDto> {
    return this.http.get('https://665c79663e4ac90a04d9a6d5.mockapi.io/pinkmonkey/products/' + id) as Observable<ProductItemDto>
  }
  filterProducts(key: string, value: any): Observable<ProductItemDto[]> {
    return this.http.get(`https://665c79663e4ac90a04d9a6d5.mockapi.io/pinkmonkey/products?${key}=${value}`) as Observable<ProductItemDto[]>
  }

  addToCart(product: ProductItemDto): void {
    const cart = this.getCart()
    const existingItemIndex = cart.findIndex(item => item.productId === product.id);
    if (existingItemIndex >= 0) {
      cart[existingItemIndex].count++
      this.editCart(this.cartList);
    } else {
      const newItem = new CartItemDto();
      newItem.productId = product.id
      newItem.count = 1;
      newItem.image = product.image,
        newItem.price = product.price;
      newItem.sale = product.sale;
      newItem.title = product.title
      this.cartList.push(newItem)
      this.editCart(this.cartList);
    }
  }

  editCart(value: CartItemDto[]): void {
    localStorage.setItem('cart', JSON.stringify(value));
  }

  getCart(): CartItemDto[] {
    const cart = localStorage.getItem('cart');
    if (cart) {
      this.cartList = JSON.parse(cart);
    }
    return this.cartList;
  }

  clearCart(): any {
    localStorage.removeItem('cart');
    this.cartList = [];
  }

  saledPrice(price: number, sale: number) {

    return (price - ((price * sale) / 100)).toFixed(2)
  }

  addToFavorite(product: ProductItemDto): void {
    const index = this.favoriteList.findIndex(id => id === product.id);
    if (index >= 0) {
      this.favoriteList.splice(index, 1);
      product.isInFav = false;
    } else {
      this.favoriteList.push(product.id);
      product.isInFav = true;
    }
    this.editFavorites(this.favoriteList);
  }

  editFavorites(favorites:string[]): void {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  getFavorites(): string[] {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
  }

}