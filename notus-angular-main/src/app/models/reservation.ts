import { Artiste } from "./artiste";
import { Evenement } from "./evenement";
import { Proprietaire } from "./proprietaire";
import { SalleExposition } from "./salle-exposition";

export class Reservation {
    idReservation!:number;
    dateDebut!:Date;
    dateFin!:Date;
    evenement!:Evenement
    proprietaire!:Proprietaire
    artiste!:Artiste
    salleExposition!:SalleExposition
}
