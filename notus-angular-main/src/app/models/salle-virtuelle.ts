import { Artiste } from "./artiste";
import { CommentaireSalleVirtuelle } from "./commentaire-salle-virtuelle";
import { Oeuvre } from "./oeuvre";
import { Proprietaire } from "./proprietaire";
import { SignalementSalleVirtuelle } from "./signalement-salle-virtuelle";

export class SalleVirtuelle {
    id!: number;
    libelle!: string;
    description!: string;
    signalementSalleVirtuelle!: SignalementSalleVirtuelle[];
    commentaireSalleVirtuelle!: CommentaireSalleVirtuelle[];
    proprietaire!: Proprietaire;
    artiste!: Artiste;

}
