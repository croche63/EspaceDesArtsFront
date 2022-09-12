import { Component, OnInit } from "@angular/core";
import { AppService } from "src/app/app.service";
import { OeuvreService } from "src/app/services/oeuvre.service";
import { RoleService } from "src/app/services/role.service";
import { SalleExpositionService } from "src/app/services/salle-exposition.service";
import { SalleVirtuelleService } from "src/app/services/salle-virtuelle.service";
import { SignalementOeuvreService } from "src/app/services/signalement-oeuvre.service";
import { SignalementSalleExpositionService } from "src/app/services/signalement-salle-exposition.service";
import { SignalementSalleVirtuelleService } from "src/app/services/signalement-salle-virtuelle.service";
import { UtilisateurService } from "src/app/services/utilisateur.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements OnInit {

  //TODO Gestion des abonnés des espaces d'exposition
  // Affichage des utilisateurs et de leurs rôles
  // Possibilité de leur associer un role

  utilisateurs:any[];
  roles:any[];

  signalementOeuvre:any[];
  signalementSalleExposition:any[];
  signalementSalleVirtuelle:any[];

  constructor(
    private utilisateurService:UtilisateurService, private roleService:RoleService, private signalementOeuvreService:SignalementOeuvreService,
    private signalementSalleExpositionService:SignalementSalleExpositionService, private signalementSalleVirtuelleService:SignalementSalleVirtuelleService,
    private oeuvreService:OeuvreService, private salleVirtuelleService:SalleVirtuelleService, private salleExpositionService:SalleExpositionService,
    private appService:AppService,
    ) {}

  ngOnInit() {
    this.findAllInfos();
  }

  findAllInfos() {
    this.utilisateurService.findAll().subscribe((data: any[]) => {this.utilisateurs = data;});
    this.roleService.findAll().subscribe((data: any[]) => {this.roles = data;});
    this.signalementOeuvreService.findAll().subscribe((data: any[]) => {this.signalementOeuvre = data;});
    this.signalementSalleExpositionService.findAll().subscribe((data: any[]) => {this.signalementSalleExposition = data;});
    this.signalementSalleVirtuelleService.findAll().subscribe((data: any[]) => {this.signalementSalleVirtuelle = data;});
  }

  // Supprime les signalements et recharge les pages
  delSignOeuvre(id:number) {
    this.signalementOeuvreService.delete(id).subscribe(() => {this.findAllInfos()})
  }

  delSignSalleExpo(id:number) {
    this.signalementSalleExpositionService.delete(id).subscribe(() => {this.findAllInfos()})
  }

  delSignSalleVirt(id:number) {
    this.signalementSalleVirtuelleService.delete(id).subscribe(() => {this.findAllInfos()})
  }

  delOeuvre(id:number) {
    this.oeuvreService.delete(id).subscribe(() => {this.findAllInfos()})
  }
  delSalleVirt(id:number) {
    this.salleVirtuelleService.delete(id).subscribe(() => {this.findAllInfos()})
  }
  delSalleExpo(id:number) {
    this.salleExpositionService.delete(id).subscribe(() => {this.findAllInfos()})
  }

  isAdmin(){
    if(this.appService.isAdmin == true) {
      return false;
    } else {
      return true;
    }
  }
}
