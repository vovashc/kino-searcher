import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map, pluck, tap } from 'rxjs/operators';
import { Film } from '../interfaces/films-list';
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
     this.movieHttpService.getMovie()
      .pipe(
        tap(movies => console.log(movies)),
        pluck('results'),
        map(results => {
          return results.filter(item => item.media_type === 'movie');
        }),
        map(results => {
          return results.map(item => {
            const localFilmsIds = JSON.parse(localStorage.getItem('favouriteFilms') as string);
            item.favourite = !!localFilmsIds && !!localFilmsIds.find((filmId: any) => item.id === filmId);
            return item;
          });
        })
      )
      .subscribe(res => {
        this.listArray = res;
      });
  }

  search(searchValue: string): void {
    this.movieHttpService.getSearch({query: searchValue})
      .pipe(
        tap(movies => console.log(movies)),
        pluck('results'),
        map(results => {
          return results.map(item => {
            const localFilmsIds = JSON.parse(localStorage.getItem('favouriteFilms') as string);
            item.favourite = !!localFilmsIds && !!localFilmsIds.find((filmId: any) => item.id === filmId);
            return item;
          });
        })
      )
      .subscribe(res => {
        this.listArray = res;
      });
  }

  switchFavourite({ id, isFavourite }: any): void {
      console.log(id, isFavourite);
      this.listArray = this.listArray?.map(item => {
      if(item.id === id) {
        item.favourite = isFavourite;
      }

      return item;
    })
  }
}
