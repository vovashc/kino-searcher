import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router,} from '@angular/router';
import { FilmsHttpService } from '../services/films-http.service';
import { switchMap, takeUntil } from 'rxjs/operators';
import { Film, GetMovieById } from '../interfaces/films-list';
import { combineLatest, Subject,} from 'rxjs';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})

export class FilmDetailsComponent implements OnInit, OnDestroy {
  data: GetMovieById | undefined;
  currentItem: Film[] | undefined;
  notifier = new Subject()
  
  constructor(
    private route: ActivatedRoute, 
    private movieHttpService: FilmsHttpService
  ) { }

  ngOnInit(): void {
    this.route.params
      .pipe((takeUntil(this.notifier)),
        switchMap((params: Params) => 
          combineLatest([  
            this.movieHttpService.getMovieId(+params.id), 
            this.movieHttpService.getSimilarMovie(+params.id)],
          )
        ),  
      )
      .subscribe(([byId, similarMovies]) =>{
        console.log(byId, similarMovies)
        this.data = byId;
        this.currentItem = similarMovies.results;
      })
    } 

    ngOnDestroy() { 
      this.notifier.next()
      this.notifier.complete()
      console.log(this.ngOnDestroy)
  } 
}
