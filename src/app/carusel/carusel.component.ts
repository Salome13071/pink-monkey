import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductItemDto } from '../dtos/ProductItemDto';
import { NgFor, NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-carusel',
  standalone: true,
  imports: [NgFor],
  templateUrl: './carusel.component.html',
  styleUrl: './carusel.component.css'
})
export class CaruselComponent {

  public caruselList: ProductItemDto[] = [];
  public currency: string = '$';


  constructor(public productService: ProductService ,private router:Router){
    this.productService.getProductList().subscribe(data => {
      this.caruselList = data;
    })
  }
  goToDetails(id: string) {    
    this.router.navigate(['/product/' + id]);
  }
}
