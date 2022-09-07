import { SalleExposition } from "./salle-exposition"
import { Utilisateur } from "./utilisateur"

export class CommentaireSalleExposition {
    id!:number
    titre!:string
    description!:string
    note!:number
    date!:Date
    salleExposition!:SalleExposition
    utilisateur!:Utilisateur
}
