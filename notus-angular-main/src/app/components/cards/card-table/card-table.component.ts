import { Component, OnInit, Input } from "@angular/core";
import { AppService } from "src/app/app.service";
import { Proprietaire } from "src/app/models/proprietaire";
import { Table } from "src/app/models/table";
import { ProprietaireService } from "src/app/services/proprietaire.service";

@Component({
  selector: "app-card-table",
  templateUrl: "./card-table.component.html",
})
export class CardTableComponent implements OnInit {
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";



  proprietaire: Proprietaire = new Proprietaire()
  proprietaires!: any[];
  username:string = "test2" //this.appService.username
  tableau1: Table = new Table();
  titre:string = "Liste des réservations"


    constructor(private proprietaireService:ProprietaireService, 
      private appService:AppService) {}
  
    ngOnInit(): void {
  this.getProprietaire(this.username);
    }
  
  getProprietaire(username:string){ // this.username
    this.proprietaireService.findByUsername(username).subscribe((data: Proprietaire) => {
      this.proprietaire = data;console.log(this.proprietaire);
      
    this.tableau1.titre="Liste des réservations de "+ data.nom;
    this.tableau1.principal=["Artiste","Durée","Evenements"];
    this.tableau1.contenu=data.salleExposition.reservation;console.log(this.tableau1);
  });
  } 
   

}
