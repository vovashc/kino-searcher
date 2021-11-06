export interface GetFilmsResponse {
    timestamp: number;
    timespam: boolean;
    page: number
    results: Film[];
    total_pages:  number;
    total_results: number;
}

export interface Film {
    genre_ids: number[];
    title: string;    
    name: string;
    id: number;
    Rated: string;
    release_date: string,
    original_title: string;
    overview: string;
    original_language: string;
    media_type: string;
    popularity: string;
    poster_path: string;
    vote_average: number;
    vote_count: number;
    adult: boolean;
    favorite: boolean;
}

export interface GetMovieById {
    adult: false;
    backdrop_path: string;
    belongs_to_collection: {};
    budget: number;
    genres: {
        id: number;
        name: string;
    }[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    
    production_companies: {
        id: number;
        logo_path: string;
        name: string;
        origin_country: string;
    }[]
    production_countries: {
        iso_3166_1: number;
        name: string;
    }[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: {
        english_name: string;
        iso_639_1: string;
        name: string;
    }[];
    status: string;
    tagline: string;
    title: string;
    video: false
    vote_average: number;
    vote_count: number;
}

export interface FavoriteId {
  id: number;
  isFavorite: boolean;
}