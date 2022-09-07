import { SalleVirtuelle } from "./salle-virtuelle"
import { Utilisateur } from "./utilisateur"

export class SignalementSalleVirtuelle {
    id!:number
    titre!:string
    description!:string
    date!:Date
    salleVirtuelle!:SalleVirtuelle
    utilisateur!:Utilisateur
}
