import { Component } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { ProductItemDto } from '../../dtos/ProductItemDto';
import { NgForOf, NgIf } from '@angular/common';
import { ProductService } from '../../../services/product.service'
import { FilterComponent } from '../../filter/filter.component';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent, NgForOf, FilterComponent, NgIf],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  public currency: string = '$';
  public isLoading: boolean = true;
  constructor(public productService: ProductService) {
      this.isLoading = true;
      this.productService.getProductList().subscribe(data => {
        this.productService.getFavorites()
        data.forEach((val, index)=> {
          if (this.productService.favoriteList.find(id => id === val.id)){
            data[index]['isInFav'] = true;
          } else {
            data[index]['isInFav'] = false;
          }
        })
        
        this.productService.productList = data;
        console.log (this.productService.productList)
        this.isLoading = false;
      })
  }

}
