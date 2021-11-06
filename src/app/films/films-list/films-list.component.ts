import { Component, OnInit } from '@angular/core';
import { map, pluck, tap } from 'rxjs/operators';
import { FavoriteId, Film } from '../interfaces/films-list';
import { FilmsHttpService } from '../services/films-http.service';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss']
})
export class FilmsListComponent implements OnInit {
  listArray: Film[] = [];

  constructor(private movieHttpService: FilmsHttpService) { }

  ngOnInit(): void {
    this.getFilmList()
  }

  private getFilmList(): void{
    this.movieHttpService.getMovie()
      .pipe(
        pluck('results'),
        map(results => results
            .filter(item => item.media_type === 'movie')
            .map(item => this.filmsListTransform(item))
        ),
      )
      .subscribe(res => {
        this.listArray = res;
      });
  }

  search(searchValue: string): void {
    this.movieHttpService.getSearch({query: searchValue})
      .pipe(
        pluck('results'),
        map(results => results.map(item => this.filmsListTransform(item)))
      )
      .subscribe(res => {
        this.listArray = res;
      });
  }

  switchFavorite({ id, isFavorite }: FavoriteId): void {
    this.listArray = this.listArray?.map(item => {
        if(item.id === id) {
            item.favorite = isFavorite;
        }

        return item;
    })
  }

  private filmsListTransform(item: Film): Film {
    const localFilmsIds = JSON.parse(localStorage.getItem('favoriteFilms') as string);
    item.favorite = !!localFilmsIds && !!localFilmsIds.find((filmId: number) => item.id === filmId);
    return item;
  } 
}
