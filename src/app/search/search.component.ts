import { NgIf } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [NgIf],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {


  searchQuery: string = '';

  searchOpen: boolean = false;
  searchBtnClick: boolean = false;

  constructor(private renderer: Renderer2, private productService: ProductService) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (!this.searchBtnClick) {
        this.searchOpen = false;
      }
      this.searchBtnClick = false;
    });
  }
  togglesearch() {
    this.searchOpen = !this.searchOpen;
  }
  preventCloseOnClick() {
    this.searchBtnClick = true;
  }

  search() {
    this.productService.filtredList = this.productService.productList.filter(
      item => item.title.toLowerCase() == 'love'
    )
  }


}
