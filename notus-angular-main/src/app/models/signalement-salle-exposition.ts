import { SalleExposition } from "./salle-exposition"
import { Utilisateur } from "./utilisateur"

export class SignalementSalleExposition {
    id!:number
    titre!:string
    description!:string
    date!:Date
    salleExposition!:SalleExposition
    utilisateur!:Utilisateur
}
