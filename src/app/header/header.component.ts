import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-header',
  imports: [CommonModule,RouterLink, SearchComponent, RouterModule],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchData: string = '';
  constructor(private router: Router ) {

  }
  
  isMenuOpen: boolean = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  searchActive(): boolean {
    if(this.router.url === '/products') {
      return true;
    }
    return false; 
  }

}


