import { Genre } from "./genre.model";

export class TvShow {
    idTvShow! : number;
    nomTvShow! : string;
    saisonTvShow! : number;
    dateCreation! : Date ;
    genre! : Genre;
    }