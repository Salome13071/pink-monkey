import { Component } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { ProductItemDto } from '../../dtos/ProductItemDto';
import { NgForOf } from '@angular/common';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent, NgForOf],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  public currency: string = '$';

  constructor(public productService: ProductService) {

  }

}
