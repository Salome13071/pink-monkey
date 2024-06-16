import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductItemDto } from '../dtos/ProductItemDto';
import { ProductComponent } from "../pages/product-list/product/product.component";


@Component({
  selector: 'app-favorite-list',
  standalone: true,
  templateUrl: './favorite-list.component.html',
  styleUrl: './favorite-list.component.css',
  imports: [NgIf, NgFor, NgClass, ProductComponent]
})
export class FavoriteListComponent implements OnInit {
  public currency: string = '$';
  public isLoading = false;
  public favProductsList: ProductItemDto[] = [];

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.productService.favoriteList = this.productService.getFavorites();

    this.productService.getProductList().subscribe(products => {
      for (const favProductId of this.productService.favoriteList) {
        const product = products.find(item => item.id === favProductId)
        if (product) {
          this.favProductsList.push(product);
        }
      }
      this.isLoading = false;
    });
  }

  removeFavorite(favProductId: string) {
    const index = this.productService.favoriteList.findIndex(id => id === favProductId);
    if (index >= 0) {
      this.productService.favoriteList.splice(index, 1);
      this.productService.editFavorites(this.productService.favoriteList);
      this.favProductsList = this.favProductsList.filter(product => product.id !== favProductId);
    }
  }

  addToCart(product: ProductItemDto) {
    this.productService.addToCart(product);
  }
}
