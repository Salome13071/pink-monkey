import { Component, Input, input } from '@angular/core';
import { ProductItemDto } from '../../../dtos/ProductItemDto';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() currency: string = '';
  @Input() payload: ProductItemDto = {} as ProductItemDto;

  constructor(private productService: ProductService) {}

  addToCart(product: ProductItemDto) {
    console.log('ddas')
    this.productService.addToCart(product);
  }

  saledPrice(price: number, sale: number){
     
      return (price - ((price * sale) / 100)).toFixed(2)
    
  
  }
}
