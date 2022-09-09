import { Adresse } from "./adresse";
import { EvaluationArtiste } from "./evaluation-artiste";
import { Oeuvre } from "./oeuvre";
import { Reservation } from "./reservation";
import { Utilisateur } from "./utilisateur";

export class Artiste extends Utilisateur{
    nationalite!:string
    dateNaissance!:Date
    adresse!:Adresse
    reservations!:Reservation
    evaluationArtistes!:EvaluationArtiste
    oeuvres!:Oeuvre
}
