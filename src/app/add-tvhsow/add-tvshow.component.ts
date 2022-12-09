import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genre } from '../model/genre.model';
import { TvShow } from '../model/tvshow.model';
import { TvShowService } from '../services/tvshow.service';

@Component({
  selector: 'app-add-tvshow',
  templateUrl: './add-tvshow.component.html'
})
export class AddTvShowComponent implements OnInit {

  newTvShow = new TvShow();
  genres! : Genre[];
  newIdGenre! : number;
  newGenre! : Genre;
  
  constructor(private tvshowService: TvShowService,
              private router : Router) { }

  ngOnInit(): void {

    this.tvshowService.listeGenres().
          subscribe(genres => {this.genres = genres._embedded.genres;
            console.log(genres);
        });
 
  }

 
  addTvShow(){
    this.newTvShow.genre = this.genres.find(genre => genre.idGenre == this.newIdGenre)!;
    this.tvshowService.ajouterTvShow(this.newTvShow)
                      .subscribe(tvshow => {
                      console.log(tvshow);
                      this.router.navigate(['tvshows']);
                      }); 
    }




}