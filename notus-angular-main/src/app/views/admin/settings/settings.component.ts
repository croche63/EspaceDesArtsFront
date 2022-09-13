import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AppService } from "src/app/app.service";
import { Proprietaire } from "src/app/models/proprietaire";
import { Reservation } from "src/app/models/reservation";
import { SalleExposition } from "src/app/models/salle-exposition";
import { ArtisteService } from "src/app/services/artiste.service";
import { ProprietaireService } from "src/app/services/proprietaire.service";
import { ReservationService } from "src/app/services/reservation.service";
import { SalleExpositionService } from "src/app/services/salle-exposition.service";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
})
export class SettingsComponent implements OnInit {

  //TODO Reservation espace expo (voir les reservations de son espace) X
  //TODO Gestion espace expo (Afficher X, Modifier)
  //TODO Planification evenements (Visualiser X, Ajout, modification, supression evenements)
  //TODO Offrir espace virtuel

  editForm!: FormGroup;

  reservations:any[];

  artistes:any[];

  proprietaire:Proprietaire = new Proprietaire();
  username:string = this.appService.username;

  salleExposition:SalleExposition = new SalleExposition();

  constructor(
    private appService:AppService,
    private proprietaireService:ProprietaireService,
    private reservationService:ReservationService,
    private salleExpositionService:SalleExpositionService,
    private artisteService:ArtisteService,
  ) {}

  ngOnInit(): void {
    this.findAllInfos();
    console.log(this.proprietaire.prenom);
    this.findAllArtistes();
  }

  findAllInfos() {
    this.reservationService.findAll().subscribe((data: any[]) => {this.reservations = data;});
    this.proprietaireService.findByUsername(this.username).subscribe((data: Proprietaire) => {this.proprietaire = data;console.log(this.proprietaire)});
  }

  findAllArtistes(){
    this.artisteService.findAll().subscribe((data: any[]) => {this.artistes = data;});
  }

  isProprietaire(){
    if(this.appService.isProprietaire == true) {
      return false;
    } else {
      return true;
    }
  }

  //Ajout d'une salle virtuelle
  displayStyle1 = "none";
  
  openPopupSalle(){
    this.displayStyle1 = "block";
  }

  closePopupSalle() {
    this.displayStyle1 = "none";
  }

  saveSalle(){

  }

}
