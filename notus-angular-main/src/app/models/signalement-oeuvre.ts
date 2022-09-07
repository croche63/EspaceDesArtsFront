import { Oeuvre } from "./oeuvre"
import { Utilisateur } from "./utilisateur"

export class SignalementOeuvre {
    id!:number
    titre!:string
    description!:string
    date!:Date
    oeuvre!:Oeuvre
    utilisateur!:Utilisateur
}
