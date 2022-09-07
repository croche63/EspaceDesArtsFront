import { SalleVirtuelle } from "./salle-virtuelle"
import { Utilisateur } from "./utilisateur"

export class CommentaireSalleVirtuelle {
    id!:number
    titre!:string
    description!:string
    note!:number
    date!:Date
    salleVirtuelle!:SalleVirtuelle
    utilisateur!:Utilisateur
}
