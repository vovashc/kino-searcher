import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './films.component';

const routes: Routes = [
  { 
    path: '', 
    component: FilmsComponent, 
    children: [
      {  
        path: '',
        redirectTo: 'films-list'
      },
      { 
        path: 'films-list', 
        loadChildren: () => import('./films-list/films-list.module').then(m => m.FilmsListModule) 
      },
      { 
        path: 'details/:id', 
        loadChildren: () => import('./film-details/film-details.module').then(m => m.FilmDetailsModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmsRoutingModule { }
