import { Component, OnInit } from '@angular/core';
import { Genre } from '../model/genre.model';
import { TvShow } from '../model/tvshow.model';
import { TvShowsComponent } from '../tvshows/tvshows.component';
import { TvShowService } from '../services/tvshow.service';

@Component({
  selector: 'app-recherche-par-genre',
  templateUrl: './recherche-par-genre.component.html',
  styles: [
  ]
})
export class RechercheParGenreComponent implements OnInit {
  IdGenre! : number;
  genres! : Genre[];
  tvshows! : TvShow[];


  constructor(private tvshowService : TvShowService) { }

  ngOnInit(): void {
    this.tvshowService.listeGenres().
      subscribe(genres => {this.genres = genres._embedded.genres;
      console.log(genres);
    });

  }

  onChange() {
    this.tvshowService.rechercherParGenre(this.IdGenre).
      subscribe(tvshows =>{this.tvshows=tvshows});

    }

}