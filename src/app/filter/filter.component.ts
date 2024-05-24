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
    console.log(this.selectedFilter);

    if (this.selectedFilter == 'all') {
      this.productService.filtredList = this.productService.productList;
      return
    }

    this.productService.filtredList = this.productService.productList.filter(item => {
      if (this.selectedFilter === 'sale') return item.sale > 0;
      if (this.selectedFilter === 'vegan') return item.vegan;
      if (this.selectedFilter === 'diabetic') return item.diabetic;
      return false;

    })
  }
}
