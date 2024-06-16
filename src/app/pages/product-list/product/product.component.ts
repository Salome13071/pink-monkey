import { Component, Input, input } from '@angular/core';
import { ProductItemDto } from '../../../dtos/ProductItemDto';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../../services/product.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() currency: string = '';
  @Input() payload: ProductItemDto = {} as ProductItemDto;

  constructor(public productService: ProductService, private router:Router ) {}

  addToCart(product: ProductItemDto) {
    this.productService.addToCart(product);
  }

  addToFavorite(product: ProductItemDto) {
    this.productService.addToFavorite(product);
  }

  goToDetails(id: string) {    
    this.router.navigate(['/product/' + id]);
  }
  
}
