import { Routes } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { RecapComponent } from './recap/recap.component';
import { Page404Component } from './page404/page404.component';

export const routes: Routes = [

    {path: "liste", component: ListeComponent}, 
    {path: "recap", component: RecapComponent},
    {path: "", redirectTo: "liste", pathMatch: 'full'},    /*redirige l'url de base vers la page d'accueil*/
    {path: "**", component: Page404Component}   /* '**' = n'importe quel caractères */
];
