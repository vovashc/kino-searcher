import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmDetailsRoutingModule } from './film-details-routing.module';
import { FilmDetailsComponent } from './film-details.component';
import { SimilarFilmsComponent } from './similar-films/similar-films.component';


@NgModule({
  declarations: [
    FilmDetailsComponent,
    SimilarFilmsComponent
  ],
  imports: [
    CommonModule,
    FilmDetailsRoutingModule
  ]
})
export class FilmDetailsModule { }
