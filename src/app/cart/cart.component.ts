import { Component, NgModule, input } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartItemDto } from '../dtos/cartItemDto';
import { ProductItemDto } from '../dtos/ProductItemDto';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  public cartPageList: CartItemDto[] = [];

  constructor(public productService: ProductService) { }


  ngOnInit(): void {
    this.getCartList();
  }

  getCartList(): void {
    this.cartPageList = this.productService.getCart();
  }


}

