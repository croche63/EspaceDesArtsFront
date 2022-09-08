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
role!:Role;

  constructor(private proprietaireService:ProprietaireService, 
    private appService:AppService, private utilisateurService:UtilisateurService,
    private roleService:RoleService) {}

  ngOnInit(): void {
this.getProprietaire();
this.findAllProprietaires()
this.findAllUtilisateurs()
this.findAllRoles()
this.findRoleByLibelle()

  }

getProprietaire(){ // this.username
  this.proprietaireService.findByUsername("admin").subscribe((data: Proprietaire) => {this.proprietaire = data;console.log(this.proprietaire)});
  this.proprietaireService.findByUsername("test").subscribe((data: Proprietaire) => {this.nom = data.nom;console.log(this.nom);
  });
}
findAllProprietaires(){
  this.proprietaireService.findAll().subscribe((data: Proprietaire[]) => {this.proprietaires = data;console.log(this.proprietaires);
  });
}
findAllUtilisateurs(){
  this.utilisateurService.findAll().subscribe((data:Utilisateur[]) => {this.utilisateurs = data;console.log(this.utilisateurs);
  })
}
findAllRoles(){
  this.roleService.findAll().subscribe((data:Role[]) => {this.roles=data;console.log(this.roles);
  })
}

findRoleByLibelle(){
  this.roleService.findByLibelle("artiste").subscribe((data:Role) => {this.role=data;console.log(this.role)})
}

}
