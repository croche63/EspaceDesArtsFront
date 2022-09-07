import { CommentaireOeuvre } from "./commentaire-oeuvre"
import { CommentaireSalleExposition } from "./commentaire-salle-exposition"
import { CommentaireSalleVirtuelle } from "./commentaire-salle-virtuelle"
import { Role } from "./role"
import { SignalementOeuvre } from "./signalement-oeuvre"
import { SignalementSalleExposition } from "./signalement-salle-exposition"
import { SignalementSalleVirtuelle } from "./signalement-salle-virtuelle"

export class Utilisateur {
    id!:number
    nom!:string
    prenom!:string
    username!:string
    password!:string
    email!:string
    numeroTel!:string
    image!:File
    commentaireSalleExpositions!:CommentaireSalleExposition
    signalementSalleExpositions!:SignalementSalleExposition
    commentaireOeuvres!:CommentaireOeuvre
    signalementOeuvres!:SignalementOeuvre
    commentaireSalleVirtuelles!:CommentaireSalleVirtuelle
    signalementSalleVirtuelles!:SignalementSalleVirtuelle
    roles!:Role

}
