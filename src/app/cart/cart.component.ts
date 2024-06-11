import { Component, NgModule, OnInit, input } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartItemDto } from '../dtos/cartItemDto';
import { ProductItemDto } from '../dtos/ProductItemDto';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent  implements OnInit{

  public count: number = 1; 
  public currency: string = '$';
  constructor(public productService: ProductService) { }
  
  
  ngOnInit(): void {
    this.getCartList();
  }

  saledPrice(price: number, sale: number){
   return this.productService.saledPrice(price , sale)
  }

  getCartList(): CartItemDto[] {
    this.productService.cartList = this.productService.getCart();
    return this.productService.cartList;
  }
  removeProductFromCart(productId: number): void{
    this.productService.cartList = this.productService.cartList.filter (item => item.productId !== productId)
    this.productService.editCart(this.productService.cartList)
  }

  decrement(productId: number): void {
    const cart = this.getCartList()
    const getCartIndex = cart.findIndex(item => item.productId === productId)
    if (getCartIndex >=0){ 
      if(cart[getCartIndex].count >1){
        cart[getCartIndex].count--;
        this.productService.editCart(cart);
      }
    }
  }

  increment(productId: number): void {
    const cart = this.getCartList();
    const getCartIndex = cart.findIndex(item => item.productId === productId)
    if(getCartIndex>=0){
      cart[getCartIndex].count++;
      this.productService.editCart(cart);
    }
  }

  getTotalCartPrice(): number {
    return this.productService.cartList.reduce(
      (total, item) => {
        let  calcPrice = 0;
        if(item.sale > 0) {
          calcPrice = parseFloat(this.productService.saledPrice(item.price, item.sale));
        }else {
          calcPrice = item.price;
        }
        calcPrice = calcPrice * item.count;
        return total + calcPrice;
      }, 0);
  }
}

