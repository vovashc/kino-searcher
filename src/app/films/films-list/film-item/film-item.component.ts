import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FavoriteId, Film } from '../../interfaces/films-list';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss']
})
export class FilmItemComponent implements OnInit {
  @Input() film: Film | undefined; 
  @Output() favoriteId = new EventEmitter<FavoriteId>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleFavorite(filmId: number, isFavorite: boolean): void {
    this.favoriteId.emit({id: filmId, isFavorite });
    if(isFavorite) {
      this.setFavorite(filmId);
    } else {
      this.deleteFavorite(filmId);
    }
  }

  private setFavorite(filmId: number): void {
    let favoriteFilms = [];
    if(localStorage.getItem('favoriteFilms')) {
      const localFilmsIds = JSON.parse(localStorage.getItem('favoriteFilms') as string);
      favoriteFilms = [...localFilmsIds, filmId];
    } else {
      favoriteFilms = [filmId];
     }
    localStorage.setItem('favoriteFilms', JSON.stringify(favoriteFilms));
  }

    
  private deleteFavorite(filmId: number): void {
    if(localStorage.getItem('favoriteFilms')) {
      const localFilmsIds = JSON.parse(localStorage.getItem('favoriteFilms') as string);
      const favoriteFilms = localFilmsIds.filter((item: number) => item !== filmId);
      localStorage.setItem('favoriteFilms', JSON.stringify(favoriteFilms));
    } 
  }
}
