import { NgIf } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {


  searchQuery: string = '';


  constructor(private productService: ProductService) {
  }
  
  search() {
    if(this.searchQuery === '') {
      this.productService.filtredList = this.productService.productList;
      return;
    }

    if(this.searchQuery.length >=1) {
      this.productService.filtredList =
      this.productService.productList.filter(
        item => item.title.toLowerCase()
          .includes(this.searchQuery.toLowerCase())
      )
    }
  }


}
