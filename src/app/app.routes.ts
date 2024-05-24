import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProductListComponent } from './pages/product-list/product-list.component';


export const routes: Routes = [


    {
        path: '',
        component: MainComponent,
        title:'Home',
        pathMatch: 'full'
    },

    {
        path: 'products',
        component: ProductListComponent,
        title:'products'
    }

];

