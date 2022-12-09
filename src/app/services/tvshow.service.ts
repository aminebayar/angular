import { Injectable } from '@angular/core';
import { Genre } from '../model/genre.model';
import { TvShow } from '../model/tvshow.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GenreWrapper } from '../model/genreWrapped.model';
import { AuthService } from './auth.service';
import { apiURL } from '../config';

const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class TvShowService {
  
 
  apiURLGenre: string = 'http://localhost:8989/tvshows/genre';

  tvshows! : TvShow[]; //un tableau de tvshows
  //genres : Genre[];
 

  constructor(private http : HttpClient,
              private authService : AuthService) { 
    
    /* this.genres = [
      {idCat : 1, nomCat : "PC"},
      {idCat : 2, nomCat : "Imprimante"}
    ]; */
  /*  this.tvshows = [{idTvShow : 1, nomTvShow : "PC Asus", prixTvShow : 3000.600, dateCreation : new Date("01/14/2011"),
                      genre : {idCat : 1, nomCat : "PC"} },
                     {idTvShow : 2, nomTvShow : "Imprimante Epson", prixTvShow : 450, dateCreation : new Date("12/17/2010"),
                    genre :  {idCat : 2, nomCat : "Imprimante"}},
                     {idTvShow : 3, nomTvShow :"Tablette Samsung", prixTvShow : 900.123, dateCreation : new Date("02/20/2020"), 
                     genre : {idCat : 1, nomCat : "PC"}}
                    ];
                    */
    
  }

  listeTvShow(): Observable<TvShow[]>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.get<TvShow[]>(apiURL+"/all",{headers:httpHeaders});

    }

    ajouterTvShow( tvshow: TvShow):Observable<TvShow>{
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
        return this.http.post<TvShow>(apiURL, tvshow, {headers:httpHeaders});
      }
     
      
   
  supprimerTvShow(id : number) {
        const url = `${apiURL}/${id}`;
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
          return this.http.delete(url,  {headers:httpHeaders});
        }
      
       consulterTvShow(id: number): Observable<TvShow> {
          const url = `${apiURL}/${id}`;
          let jwt = this.authService.getToken();
          jwt = "Bearer "+jwt;
          let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
            return this.http.get<TvShow>(url,{headers:httpHeaders});
          }
  
      updateTvShow(tvshow :TvShow) : Observable<TvShow>    {
          let jwt = this.authService.getToken();
          jwt = "Bearer "+jwt;
          let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
            return this.http.put<TvShow>(apiURL, tvshow, {headers:httpHeaders});
          }
  

         
       listeGenres():Observable<GenreWrapper>{
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt})
        return  this.http.get<GenreWrapper>(this.apiURLGenre,{headers:httpHeaders});
        
            }     

       rechercherParGenre(idGenre: number): Observable<TvShow[]> {
          const url = `${apiURL}/tvshowsgenre/${idGenre}`;
          return this.http.get<TvShow[]>(url);
         } 

  rechercherParNom(nom: string):Observable< TvShow[]> {
    const url = `${apiURL}/tvshowsByName/${nom}`;
    return this.http.get<TvShow[]>(url);
    }

    ajouterGenre( genre: Genre):Observable<Genre>{
      return this.http.post<Genre>(this.apiURLGenre, genre, httpOptions);
      }
      

 
}
