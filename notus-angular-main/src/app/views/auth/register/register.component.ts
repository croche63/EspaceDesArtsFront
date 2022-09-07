import { Component, OnInit } from "@angular/core";
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

  constructor(private utilisateurService:UtilisateurService) { }

  ngOnInit(): void {}

  save(){
    this.utilisateurService.save(this.utilisateur).subscribe(
      ()=>{
        this.utilisateur = new Utilisateur(); //vider formulaire
      }
    )
  }
}
