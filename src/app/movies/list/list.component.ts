import { DecimalPipe } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';

import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';
import { ListSortableHeader, SortEvent } from './sortable.directive';
import { Router } from '@angular/router';

@Component(
  {
    selector: 'movies-list',
    templateUrl: './list.component.html',
    providers: [MoviesService, DecimalPipe]
  })
export class ListComponent {
  movies$: Observable<Movie[]>;
  total$: Observable<number>;

  @ViewChildren(ListSortableHeader)
  headers!: QueryList<ListSortableHeader>;

  constructor(public service: MoviesService,private router:Router) {
    this.movies$ = service.movies$;
    this.total$ = service.total$;
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });


    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  viewDetails(imdbId:string) {
    this.router.navigateByUrl('/movies/'+imdbId);
  };
}
