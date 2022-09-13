import { Component, OnInit } from "@angular/core";
import { AppService } from "src/app/app.service";
import { Proprietaire } from "src/app/models/proprietaire";
import { ProprietaireService } from "src/app/services/proprietaire.service";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
})
export class SettingsComponent implements OnInit {

  //TODO Reservation espace expo (voir les reservations de son espace)
  //TODO Gestion espace expo (Modifier attributs)
  //TODO Planification evenements (Ajout, modification, supression evenements)
  //TODO Offrir espace virtuel

  proprietaire:Proprietaire = new Proprietaire()
  username:string = this.appService.username;

  constructor(
    private appService:AppService,
    private proprietaireService:ProprietaireService
  ) {}

  ngOnInit(): void {
    this.findAllInfos();
  }

  findAllInfos() {
    this.proprietaireService.findByUsername(this.username).subscribe((data: Proprietaire) => {this.proprietaire = data;console.log(this.proprietaire)});
  }
  
  //Modal pour les oeuvres
  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }

  closePopupOeuvre() {
    this.displayStyle = "none";
  }
}
