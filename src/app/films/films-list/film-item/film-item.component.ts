import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Film } from '../../interfaces/films-list';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss']
})
export class FilmItemComponent implements OnInit {
  @Input() listFilm: Film | undefined; 
  @Output() favouriteId = new EventEmitter<{id: number, isFavourite: boolean}>();
  constructor() { }

  ngOnInit(): void {
  }

  toggleFavourite(filmId: any, isFavourite: any): void {
    this.favouriteId.emit({id: filmId, isFavourite });
    if(isFavourite) {
      this.setFavourite(filmId)
    } else {
      this.deleteFavourite(filmId)
    }
  }

  private setFavourite(filmId: number): void {
    let favouriteFilms = [];
    if(localStorage.getItem('favouriteFilms')) {
      const localFilimsIds = JSON.parse(localStorage.getItem('favouriteFilms') as string);
      favouriteFilms = [...localFilimsIds, filmId];
    } else {
      favouriteFilms = [filmId];
     }
    localStorage.setItem('favouriteFilms', JSON.stringify(favouriteFilms));
  }

    
  private deleteFavourite(filmId: number): void {
    if(localStorage.getItem('favouriteFilms')) {
      const localFilimsIds = JSON.parse(localStorage.getItem('favouriteFilms') as string);
      const favouriteFilms = localFilimsIds.filter((item: number) => item !== filmId);
      localStorage.setItem('favouriteFilms', JSON.stringify(favouriteFilms));
    } 
  }
}
