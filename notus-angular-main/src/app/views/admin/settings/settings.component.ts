import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { AppService } from "src/app/app.service";
import { Proprietaire } from "src/app/models/proprietaire";
import { Role } from "src/app/models/role";
import { Utilisateur } from "src/app/models/utilisateur";
import { ProprietaireService } from "src/app/services/proprietaire.service";
import { RoleService } from "src/app/services/role.service";
import { UtilisateurService } from "src/app/services/utilisateur.service";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
})
export class SettingsComponent implements OnInit {
proprietaire: Proprietaire = new Proprietaire()
nom!:string
libelle!:string
proprietaires!: any[];

utilisateurs!: any[];
roles!:any[];

  constructor(private proprietaireService:ProprietaireService, 
    private appService:AppService, private utilisateurService:UtilisateurService,
    private roleService:RoleService) {}

  ngOnInit(): void {
this.getProprietaire();
this.findAllProprietaires()
this.findAllUtilisateurs()
this.findAllRoles()
console.log(this.proprietaires);
console.log(this.proprietaire.id);
console.log(this.utilisateurs);
console.log(this.nom)
console.log(this.libelle)

  }

getProprietaire(){ // this.username
  this.proprietaireService.findByUsername("admin").subscribe((data: Proprietaire) => {this.proprietaire = data;console.log(this.nom)});
  this.proprietaireService.findByUsername("admin").subscribe((data: any) => {this.nom = data.nom;});
}
findAllProprietaires(){
  this.proprietaireService.findAll().subscribe((data: Proprietaire[]) => {this.proprietaires = data;});
}
findAllUtilisateurs(){
  this.utilisateurService.findAll().subscribe((data:Utilisateur[]) => {this.utilisateurs = data;})
}
findAllRoles(){
  this.roleService.findAll().subscribe((data:Role[]) => {this.roles=data;console.log(this.roles);
  })
}

}
