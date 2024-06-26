import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductItemDto } from '../dtos/ProductItemDto';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  public productItem: ProductItemDto = {} as ProductItemDto;
  public currency: string = '$';

  constructor(public productService:ProductService, private route: ActivatedRoute){
      const detailId = this.route.snapshot.params['id'];
      this.productService.getProduct(detailId).subscribe(Item => {
        this.productItem = Item
      })
  }
  addToCart(product: ProductItemDto) {
    this.productService.addToCart(product);
  }
}
