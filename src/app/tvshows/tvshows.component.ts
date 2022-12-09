import { Component, OnInit } from '@angular/core';
import { TvShow } from '../model/tvshow.model';
import { AuthService } from '../services/auth.service';
import { TvShowService } from '../services/tvshow.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html'
})
export class TvShowsComponent implements OnInit {

    tvshows? : TvShow[]; //un tableau de tvshows

  constructor(private tvshowService: TvShowService,
              public authService: AuthService) {
   //this.tvshows=[];
     }

  ngOnInit(): void {

    this.chargerTvShows();
  }

  chargerTvShows(){
    this.tvshowService.listeTvShow().subscribe(tvshows => {
      console.log(tvshows);
      this.tvshows = tvshows;
      });
  }

supprimerTvShow(p: TvShow)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
  this.tvshowService.supprimerTvShow(p.idTvShow).subscribe(() => {
        console.log("tvshow supprimé");
        this.chargerTvShows();     
      
});
}
 
 

}