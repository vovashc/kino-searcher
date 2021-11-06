import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetFilmsResponse, GetMovieById } from '../interfaces/films-list';

interface Params {
  api_key?: string;
  language?: string;
}

interface GetListParams extends Params {
  page?: number;
}

interface SearchMoviesParams extends Params {
  page?: number;
  query?: string; 
}

@Injectable({
  providedIn: 'root'
})
export class FilmsHttpService {

  constructor( private http: HttpClient ) { }

  getMovie( config: GetListParams = {} ): Observable<GetFilmsResponse> {
    config['page'] = 1;
    const qp = this.generateQueryParams(config);

    return this.http.get<GetFilmsResponse>(`${environment.apiUrl}/trending/all/day?${qp}`);
  }

  getSearch( config: SearchMoviesParams = {} ): Observable<GetFilmsResponse> {
    config['page'] = 1;
    const qp = this.generateQueryParams(config);

    return this.http.get<GetFilmsResponse>(`${environment.apiUrl}/search/movie/?${qp}`);
  }

  getMovieId( movie_id: number): Observable<GetMovieById> {
    const qp = this.generateQueryParams({});

    return this.http.get<GetMovieById>(`${environment.apiUrl}/movie/${movie_id}?${qp}`);
  }


  getSimilarMovie(movie_id: number): Observable<GetFilmsResponse>{
    const qp = this.generateQueryParams({});

    return this.http.get<GetFilmsResponse>(`${environment.apiUrl}/movie/${movie_id}/similar?${qp}`);
  }

  private generateQueryParams(config: Params): string {
    config['api_key'] = '6e39b915b87d731aec3cace54a1d9ee3';
    config['language'] = 'en-US';

    return Object
      .entries(config)
      .reduce(( acc:string[], [k,v] ) => {
        return [ ...acc, `${k}=${v}` ]
      }, [])
      .join('&');
  }
}