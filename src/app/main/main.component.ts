import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CaruselComponent } from "../carusel/carusel.component";

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
    imports: [RouterModule, CaruselComponent]
})
export class MainComponent {
 
  constructor(public router:Router){}

  goToProducts() {
    this.router.navigate(['/products']);
  }

  
}
