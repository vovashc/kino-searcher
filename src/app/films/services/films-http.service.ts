import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetFilmsRespose, GetMovieById } from '../interfaces/films-list';

interface Params {
  api_key?: string;
  lenguage?: string;
}

interface GetListParams extends Params {
  page?: number;
}

interface SearchMoviesParams extends Params {
  page?: number;
  query?: string; 
}

interface GetIdParams extends Params {
}


@Injectable({
  providedIn: 'root'
})
export class FilmsHttpService {

  constructor( private http: HttpClient ) {
  }

  getMovie( config: GetListParams = {} ): Observable<GetFilmsRespose> {
    config['api_key'] = '6e39b915b87d731aec3cace54a1d9ee3';
    config['lenguage'] = 'en-US';
    config['page'] = 1;
    const qp = Object
      .entries(config)
      .reduce(( acc:string[], [k,v] ) => {
        return [ ...acc, `${k}=${v}` ]
      }, [])
      .join('&');
    return this.http.get<GetFilmsRespose>(`https://api.themoviedb.org/3/trending/all/day?${qp}`);
  }

  getSearch( config: SearchMoviesParams = {} ): Observable<GetFilmsRespose> {
    config['api_key'] = '6e39b915b87d731aec3cace54a1d9ee3';
    config['lenguage'] = 'en-US';
    config['page'] = 1;
    const qp = Object
      .entries(config)
      .reduce(( acc:string[], [k,v] ) => {
        return [ ...acc, `${k}=${v}` ]
      }, [])
      .join('&');
    return this.http.get<GetFilmsRespose>(`https://api.themoviedb.org/3/search/movie/?${qp}`);
  }

  getMovieId( movie_id: number, config: GetIdParams = {} ): Observable<GetMovieById> {
    config['api_key'] = '6e39b915b87d731aec3cace54a1d9ee3';
    config['lenguage'] = 'en-US';
    const qp = Object
      .entries(config)
      .reduce(( acc:string[], [k,v] ) => {
        return [ ...acc, `${k}=${v}` ]
      }, [])
      .join('&');
    return this.http.get<GetMovieById>(`https://api.themoviedb.org/3/movie/${movie_id}?${qp}`);
  }


  getSimilarMovie(movie_id: number, config: GetIdParams = {}): Observable<GetFilmsRespose>{
    config['api_key'] = '6e39b915b87d731aec3cace54a1d9ee3';
    config['lenguage'] = 'en-US';
    const qp = Object
      .entries(config)
      .reduce(( acc:string[], [k,v] ) => {
        return [ ...acc, `${k}=${v}` ]
      }, [])
      .join('&');
    return this.http.get<GetFilmsRespose>(`https://api.themoviedb.org/3/movie/${movie_id}/similar?${qp}`);
  }
}