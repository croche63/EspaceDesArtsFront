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

  utilisateur:Utilisateur = new Utilisateur();

  selectedFiles:FileList;
  currentFileUpload:File;

  constructor(private utilisateurService:UtilisateurService, private router:Router) { }

  ngOnInit(): void {}

  selectFile(event:any){
    this.selectedFiles = event.target.files;
  }
  
  save(){

    // Envoyer une image null si l'utilisateur n'a rien selectionné
    if(this.selectedFiles == undefined) {
      this.currentFileUpload = null;
    } else {
      this.currentFileUpload = this.selectedFiles.item(0);
    }

    this.utilisateurService.save(this.currentFileUpload,this.utilisateur).subscribe(
      ()=>{
        this.utilisateur = new Utilisateur(); //vider formulaire -> Inutile?
        this.selectedFiles = null;
        this.router.navigateByUrl("/auth/login"); //rediriger vers page de login
      }
    )
  }
}
