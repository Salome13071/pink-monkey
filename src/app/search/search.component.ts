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
      this.productService.filterProducts('title', this.searchQuery).subscribe(response =>{
        this.productService.productList = response;
      })
  }


}
