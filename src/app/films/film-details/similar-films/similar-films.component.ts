import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../../interfaces/films-list';

@Component({
  selector: 'app-similar-films',
  templateUrl: './similar-films.component.html',
  styleUrls: ['./similar-films.component.scss']
})
export class SimilarFilmsComponent implements OnInit {
  @Input() item: Film | undefined
  constructor(private route: ActivatedRoute) { }
  
  
  ngOnInit(): void {
    
  }



}
