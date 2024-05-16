import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CatalogeComponent } from './cataloge/cataloge.component';

export const routes: Routes = [

    {
        path: '',
        component: MainComponent,
        title:'Home'
    },

    {
        path: 'cataloge',
        component: CatalogeComponent,
        title:'cataloge'
    }
];
