import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AppService } from "src/app/app.service";
import { Utilisateur } from "src/app/models/utilisateur";
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
  //TODO : Redirections apres inscription

  utilisateur:Utilisateur = new Utilisateur();

  constructor(private utilisateurService:UtilisateurService, private router:Router) { }

  ngOnInit(): void {}

  save(){
    this.utilisateurService.save(this.utilisateur).subscribe(
      ()=>{
        this.utilisateur = new Utilisateur(); //vider formulaire
        this.router.navigateByUrl("/auth/login"); //rediriger vers page de login
      }
    )
  }
}
