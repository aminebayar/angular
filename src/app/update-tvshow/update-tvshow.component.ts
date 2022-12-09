import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Genre } from '../model/genre.model';
import { TvShow } from '../model/tvshow.model';
import { TvShowService } from '../services/tvshow.service';

@Component({
  selector: 'app-update-tvshow',
  templateUrl: './update-tvshow.component.html',
  styles: [
  ]
})
export class UpdateTvShowComponent implements OnInit {

  currentTvShow = new TvShow();
  genres! : Genre[];
  updatedGenreId! : number;
  
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private tvshowService: TvShowService) { }

  ngOnInit(): void {
    this.tvshowService.listeGenres().
    subscribe(genres => {this.genres = genres._embedded.genres;
    console.log(genres);
    });


    this.tvshowService.consulterTvShow(this.activatedRoute.snapshot.params['id']).
    subscribe( tvshow =>{ this.currentTvShow = tvshow; 
      this.updatedGenreId =   this.currentTvShow.genre.idGenre;
    
    } ) ;
    }
    

  

  updateTvShow() {
    this.currentTvShow.genre = this.genres.find(cat => cat.idGenre == this.updatedGenreId)!;
         this.tvshowService.updateTvShow(this.currentTvShow).subscribe(tvshow => {
      this.router.navigate(['tvshows']); }
      );
  }

}