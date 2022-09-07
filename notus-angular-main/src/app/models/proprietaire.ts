import { Reservation } from "./reservation";
import { SalleExposition } from "./salle-exposition";
import { Utilisateur } from "./utilisateur";

export class Proprietaire extends Utilisateur {
    reservations!:Reservation
    salleExposition!:SalleExposition
}
