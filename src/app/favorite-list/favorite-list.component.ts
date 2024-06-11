import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductItemDto } from '../dtos/ProductItemDto';


@Component({
  selector: 'app-favorite-list',
  standalone: true,
  imports: [NgIf,NgFor,NgClass],
  templateUrl: './favorite-list.component.html',
  styleUrl: './favorite-list.component.css'
})
export class FavoriteListComponent implements OnInit {
  favorites: ProductItemDto[] = [];
  public currency: string = '$';
  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.favorites = this.productService.getFavorites();
  }

  removeFavorite(product: ProductItemDto) {
    this.productService.toggleFavorite(product);
    this.favorites = this.productService.getFavorites();
  }

  addToCart(product: ProductItemDto) {
    this.productService.addToCart(product);
  }
}
