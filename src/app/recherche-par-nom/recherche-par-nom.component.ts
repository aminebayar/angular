import { Component, OnInit } from '@angular/core';
import { TvShow } from '../model/tvshow.model';
import { TvShowService } from '../services/tvshow.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [
  ]
})
export class RechercheParNomComponent implements OnInit {

  nomTvShow! : string;
  tvshows!: TvShow[];
  allTvShows!: TvShow[];
  searchTerm!: string;
  
  constructor(private tvshowService : TvShowService) { }

  ngOnInit(): void {
    this.tvshowService.listeTvShow().subscribe(tvshows => {
      console.log(tvshows);
      this.tvshows = tvshows;
      });
      
  }

  rechercherTvShows(){
    this.tvshowService.rechercherParNom(this.nomTvShow).
    subscribe(tvshows => {
      console.log(tvshows);
      this.tvshows=tvshows;});
  }

  onKeyUp(filterText : string){
    this.tvshows = this.allTvShows.filter(item =>
    item.nomTvShow.toLowerCase().includes(filterText));
    }
    

}