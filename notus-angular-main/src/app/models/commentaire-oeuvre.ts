import { Oeuvre } from "./oeuvre"
import { Utilisateur } from "./utilisateur"

export class CommentaireOeuvre {
    id!:number
    titre!:string
    description!:string
    note!:number
    date!:Date
    oeuvre!:Oeuvre
    utilisateur!:Utilisateur
}
