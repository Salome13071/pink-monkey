import { Component, Input, input } from '@angular/core';
import { ProductItemDto } from '../../../dtos/ProductItemDto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() currency: string = '';
  @Input() payload: ProductItemDto = {} as ProductItemDto

  saledPrice(price: number, sale: number){
     
      return (price - ((price * sale) / 100)).toFixed(2)
    
  
  }
}
