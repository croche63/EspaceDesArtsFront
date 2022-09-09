import { Byte } from "@angular/compiler/src/util";
import { Adresse } from "./adresse";
import { CommentaireSalleExposition } from "./commentaire-salle-exposition";
import { EvaluationArtiste } from "./evaluation-artiste";
import { Oeuvre } from "./oeuvre";
import { Proprietaire } from "./proprietaire";
import { Reservation } from "./reservation";
import { SignalementSalleExposition } from "./signalement-salle-exposition";

export class SalleExposition {
    id!:number
    libelle!:string
    logo!:Byte
    dimensionSalle!:string
    adresse!:Adresse
    proprietaire!:Proprietaire
    signalementSalleExposition!:SignalementSalleExposition
    reservation!:Reservation[]
    evaluationArtiste!:EvaluationArtiste
    commentaireSalleExposition!:CommentaireSalleExposition
    oeuvre!:Oeuvre

}
