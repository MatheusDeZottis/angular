import { Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '**', redirectTo: 'home' },
    { 
        path: 'home', component: HomeComponent 
    },
    { path: '', component: CardComponent, pathMatch: 'full' },
    { path: 'card', component: CardComponent }
];
