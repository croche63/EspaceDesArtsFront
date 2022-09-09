import { Artiste } from "./artiste"
import { CommentaireOeuvre } from "./commentaire-oeuvre"
import { SalleExposition } from "./salle-exposition"
import { SalleVirtuelle } from "./salle-virtuelle"
import { SignalementOeuvre } from "./signalement-oeuvre"

export class Oeuvre {
    idOeuvre!:number
    nom!:string
    information!:string
    image!:File
    prix!:number
    type!:string
    artiste!:Artiste
    commentaireOeuvre!:CommentaireOeuvre
    salleExposition!:SalleExposition
    signalementOeuvre!:SignalementOeuvre
    salleVirtuelle!:SalleVirtuelle
}
