import { Component } from '@angular/core';
import { NavigationStart, Route, Router, RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { FilterComponent } from './filter/filter.component';
import { ProductService } from '../services/product.service';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , HeaderComponent, MainComponent, FooterComponent,ProductListComponent, FilterComponent, CartComponent, DetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(
    private router: Router, 
    private productService: ProductService) {
    router.events.subscribe(val => {      
      if(val instanceof NavigationStart) {
        if(val.url !== '/products') {
          this.productService.productList = [];
        }
      }
    })
  }
  title = 'card-app';
}
