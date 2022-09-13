import { Component, OnInit } from "@angular/core";
import { AppService } from "src/app/app.service";
import { Proprietaire } from "src/app/models/proprietaire";
import { Reservation } from "src/app/models/reservation";
import { ProprietaireService } from "src/app/services/proprietaire.service";
import { ReservationService } from "src/app/services/reservation.service";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
})
export class SettingsComponent implements OnInit {

  //TODO Reservation espace expo (voir les reservations de son espace) X
  //TODO Gestion espace expo (Afficher X, Modifier)
  //TODO Planification evenements (Visualiser X, Ajout, modification, supression evenements)
  //TODO Offrir espace virtuel

  reservations:any[];

  proprietaire:Proprietaire = new Proprietaire();
  username:string = this.appService.username;

  constructor(
    private appService:AppService,
    private proprietaireService:ProprietaireService,
    private reservationService:ReservationService,
  ) {}

  ngOnInit(): void {
    this.findAllInfos();
    console.log(this.proprietaire)
  }

  findAllInfos() {
    this.reservationService.findAll().subscribe((data: any[]) => {this.reservations = data;});
    this.proprietaireService.findByUsername(this.username).subscribe((data: Proprietaire) => {this.proprietaire = data;console.log(this.proprietaire)});
  }

  isProprietaire(){
    if(this.appService.isProprietaire == true) {
      return false;
    } else {
      return true;
    }
  }
}
