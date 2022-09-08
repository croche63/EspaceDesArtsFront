import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { AppService } from "src/app/app.service";
import { Proprietaire } from "src/app/models/proprietaire";
import { ProprietaireService } from "src/app/services/proprietaire.service";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
})
export class SettingsComponent implements OnInit {
proprietaire: Proprietaire = new Proprietaire()
proprietaires!: any[];

  constructor(private proprietaireService:ProprietaireService, 
    private appService:AppService) {}

  ngOnInit(): void {
this.getProprietaire();
this.findAllProprietaires()
console.log(this.proprietaires);
console.log(this.proprietaire.id);
console.log("test");

  }

getProprietaire(){ // this.username
  this.proprietaireService.findByUsername("admin").subscribe((data: any) => {this.proprietaire = data;});
}
findAllProprietaires(){
  this.proprietaireService.findAll().subscribe((data: any[]) => {this.proprietaires = data;});
}
}
