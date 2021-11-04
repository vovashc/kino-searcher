import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsListRoutingModule } from './films-list-routing.module';
import { FilmsListComponent } from './films-list.component';
import { FilmItemComponent } from './film-item/film-item.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    FilmsListComponent,
    FilmItemComponent,
    SearchMovieComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    FilmsListRoutingModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
  ]
})
export class FilmsListModule { }
