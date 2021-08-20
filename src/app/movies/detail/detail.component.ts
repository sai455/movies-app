import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  imdbId: string = '';
  movie:any;
  constructor(private route: ActivatedRoute, private router: Router,public service: MoviesService) {
    this.route.params.subscribe(params => this.imdbId = params["id"]);
    
  }

  ngOnInit(): void {
    this.getMovieDetailsById(this.imdbId);
  }
  getMovieDetailsById(imdbId: string) {
   var movieData=this.service.getMovieById(imdbId);
   if(movieData.length>0)
   {
     this.movie=movieData[0];
   }
  }

}
