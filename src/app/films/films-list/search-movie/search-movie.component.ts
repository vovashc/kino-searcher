import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {
  @Output() newSearchValue = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newSearchValue.emit(value);
  }

  constructor() {}
  
  ngOnInit(): void {}
}
