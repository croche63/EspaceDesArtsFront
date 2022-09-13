import { Reservation } from "./reservation";
import { SalleExposition } from "./salle-exposition";
import { SalleVirtuelle } from "./salle-virtuelle";
import { Utilisateur } from "./utilisateur";

export class Proprietaire extends Utilisateur {
    reservations!:Reservation
    salleExposition!:SalleExposition
    salleVirtuelles!:SalleVirtuelle
}
