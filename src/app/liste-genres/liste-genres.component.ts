import { Component, OnInit } from '@angular/core';
import { Genre } from '../model/genre.model';
import { TvShowService } from '../services/tvshow.service';

@Component({
  selector: 'app-liste-genres',
  templateUrl: './liste-genres.component.html',
  styles: [
  ]
})
export class ListeGenresComponent implements OnInit {

  genres!: Genre[];

  ajout:boolean=true;


  updatedGenre:Genre = {"idGenre":0,"nomGenre":"","descriptionGenre":""};

  
  constructor(private tvshowService: TvShowService) { }

  ngOnInit(): void {
    
    this.chargerGenres();
  }


  chargerGenres() {
    this.tvshowService.listeGenres().
      subscribe(genres => {this.genres = genres._embedded.genres;
      console.log(genres);
      });

  }

  genreUpdated(genre:Genre) {
    console.log("genre reçue du composant updateGenre ",genre);
    this.tvshowService.ajouterGenre(genre).subscribe( ()=> this.chargerGenres());


  }

  updateGenre(genre :Genre)
  {
    this.updatedGenre = genre;
    this.ajout=false;
  }

}