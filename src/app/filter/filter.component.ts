import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { ProductItemDto } from '../dtos/ProductItemDto';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  public selectedFilter = 'all';
  constructor(public productService: ProductService) { }




  applyFilter() {
    let key: string = '';
    let value: any = ''
    if (this.selectedFilter == 'all') {
      key = 'search';
      value = '';
    }
    if (this.selectedFilter === 'sale') {
      key = 'saleOn';
      value = true;
    }
    if (this.selectedFilter === 'vegan') {
      key = 'vegan',
        value = true;
    }
    if (this.selectedFilter === 'diabetic') {
      key = 'diabetic',
        value = true;
    }

    this.productService.filterProducts(key, value).subscribe(res => {
        this.productService.productList = res;
    });
  }
}
