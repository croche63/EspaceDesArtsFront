import { Artiste } from "./artiste";
import { SalleExposition } from "./salle-exposition";

export class EvaluationArtiste {
    id!:number;
    titre!:string;
    description!:string;
    note!:number;
    date!:Date;
    Utilisateur!:SalleExposition
    artiste!:Artiste
}
