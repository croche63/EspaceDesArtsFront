import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AppService } from "src/app/app.service";
import { Artiste } from "src/app/models/artiste";
import { Proprietaire } from "src/app/models/proprietaire";
import { Role } from "src/app/models/role";
import { Utilisateur } from "src/app/models/utilisateur";
import { ArtisteService } from "src/app/services/artiste.service";
import { ProprietaireService } from "src/app/services/proprietaire.service";
import { RoleService } from "src/app/services/role.service";
import { UtilisateurService } from "src/app/services/utilisateur.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
})
export class RegisterComponent implements OnInit {

  //TODO : Rendre cases obligatoires a remplir
  //TODO : Association role
  //TODO : Images?
  //TODO : Champs supplementaires si role artiste

  artiste: Artiste = new Artiste();

  roles: Role[]

  /*   selectedFiles:FileList;
    currentFileUpload:File; */

  constructor(private utilisateurService: UtilisateurService, private roleService: RoleService, private router: Router,
    private artisteService: ArtisteService, private proprietaireService: ProprietaireService) { }

  ngOnInit(): void {
    this.roleService.findAll().subscribe((data: any[]) => { this.roles = data; console.log(this.roles); });


  }

  save() {
    console.log(this.artiste.roles[0].libelle);

    if (this.artiste.roles[0].libelle == "Admin") {
      console.log("if Admin");

      let currentUser = new Utilisateur();
      currentUser.prenom = this.artiste.prenom;
      currentUser.nom = this.artiste.nom
      currentUser.username = this.artiste.username
      currentUser.password = this.artiste.password
      currentUser.roles = this.artiste.roles;
      currentUser.email = this.artiste.email;
      currentUser.numeroTel = this.artiste.numeroTel;

      this.utilisateurService.save(currentUser).subscribe(
        () => {
          this.artiste = new Artiste(); //vider formulaire -> Inutile?
          this.router.navigateByUrl("/auth/login"); //rediriger vers page de login
        })
    }

    else if (this.artiste.roles[0].libelle == "Artiste") {
      console.log("Else artiste");

      let currentUser = new Artiste();
      currentUser.prenom = this.artiste.prenom;
      currentUser.nom = this.artiste.nom
      currentUser.username = this.artiste.username
      currentUser.password = this.artiste.password
      currentUser.roles = this.artiste.roles;
      currentUser.email = this.artiste.email;
      currentUser.numeroTel = this.artiste.numeroTel;

      this.artisteService.save(currentUser).subscribe(
        () => {
          this.artiste = new Artiste(); //vider formulaire -> Inutile?
          this.router.navigateByUrl("/auth/login"); //rediriger vers page de login
        })
    }

    else if (this.artiste.roles[0].libelle == "Proprietaire") {
      console.log("Else proprio");

      let currentUser = new Proprietaire();
      currentUser.prenom = this.artiste.prenom;
      currentUser.nom = this.artiste.nom
      currentUser.username = this.artiste.username
      currentUser.password = this.artiste.password
      currentUser.roles = this.artiste.roles;
      currentUser.email = this.artiste.email;
      currentUser.numeroTel = this.artiste.numeroTel;

      this.proprietaireService.save(currentUser).subscribe(
        () => {
          this.artiste = new Artiste(); //vider formulaire -> Inutile?
          this.router.navigateByUrl("/auth/login"); //rediriger vers page de login
        })
    }

    else {
      console.log("else");

      let currentUser = new Utilisateur();
      currentUser.prenom = this.artiste.prenom;
      currentUser.nom = this.artiste.nom
      currentUser.username = this.artiste.username
      currentUser.password = this.artiste.password
      currentUser.roles = this.roles[2]
      currentUser.email = this.artiste.email;
      currentUser.numeroTel = this.artiste.numeroTel;

      this.utilisateurService.save(currentUser).subscribe(
        () => {
          this.artiste = new Artiste(); //vider formulaire -> Inutile?
          this.router.navigateByUrl("/auth/login"); //rediriger vers page de login
        })
    }
  }
}
