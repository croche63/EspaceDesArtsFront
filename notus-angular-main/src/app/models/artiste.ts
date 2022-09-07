import { Utilisateur } from "./utilisateur";

export class Artiste extends Utilisateur{
    nationalite!:string;
    dateNaissance!:Date;
}
