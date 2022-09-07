import { Reservation } from "./reservation"

export class Evenement {
    idEvenement!:number
    titre!:string
    description!:string
    dateDebut!:Date
    dateFin!:Date
    logo!:File
    reservation!:Reservation

}
