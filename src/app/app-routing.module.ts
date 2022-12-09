import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTvShowComponent } from './add-tvhsow/add-tvshow.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ListeGenresComponent } from './liste-genres/liste-genres.component';
import { LoginComponent } from './login/login.component';
import { TvShowGuard } from './tvshow.guard';
import { TvShowsComponent } from './tvshows/tvshows.component';
import { RechercheParGenreComponent } from './recherche-par-genre/recherche-par-genre.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { UpdateTvShowComponent } from './update-tvshow/update-tvshow.component';



const routes: Routes = [
  {path: "tvshows", component : TvShowsComponent},
  {path: "add-tvshow", component : AddTvShowComponent, canActivate:[TvShowGuard]},
  {path: "updateTvShow/:id", component: UpdateTvShowComponent},
  {path: "rechercheParGenre", component : RechercheParGenreComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "listeGenres", component : ListeGenresComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path: "", redirectTo: "tvshows", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
