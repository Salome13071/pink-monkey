import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { DetailsComponent } from './details/details.component';
import { AboutComponent } from './about/about.component';


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
    ,
    {
        path: 'cart',
        component: CartComponent,
        title:'cart'
    },

    {
        path: 'favorite-list',
        component: FavoriteListComponent,
        title:'favorite-list'
    },

    {
        path: 'product/:id',
        component: DetailsComponent,
        title:'product'
    },

    {
        path: 'about',
        component: AboutComponent,
        title:'about'
    }

];

