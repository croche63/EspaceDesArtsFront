import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CommentaireSalleVirtuelle } from "src/app/models/commentaire-salle-virtuelle";
import { SalleVirtuelle } from "src/app/models/salle-virtuelle";
import { SignalementSalleVirtuelle } from "src/app/models/signalement-salle-virtuelle";
import { CommentaireSalleVirtuelleService } from "src/app/services/commentaire-salle-virtuelle.service";
import { SalleVirtuelleService } from "src/app/services/salle-virtuelle.service";
import { SignalementSalleVirtuelleService } from "src/app/services/signalement-salle-virtuelle.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
})
export class ProfileComponent implements OnInit {

 salleVirtuelle: SalleVirtuelle = new SalleVirtuelle();
 
 commentairesSalleVirtuelle!: any[];
 commentaireSalleVirtuelle: CommentaireSalleVirtuelle = new CommentaireSalleVirtuelle();

 signalementsSalleVirtuelle!: any[];
 signalementSalleVirtuelle: SignalementSalleVirtuelle = new SignalementSalleVirtuelle();

  constructor(private salleVirtuelleService:SalleVirtuelleService, private router:Router,
              private commentaireSalleVirtuelleService:CommentaireSalleVirtuelleService,
              private signalementSalleVirtuelleService:SignalementSalleVirtuelleService) {}

  ngOnInit(): void {
    this.findSalleVirtuelle();
  }

  findSalleVirtuelle(){
    let idSalleVirt = localStorage.getItem("afficheSalleV");
    this.salleVirtuelleService.findOne(idSalleVirt).subscribe((data)=>{this.salleVirtuelle=data});
  }

  //COMMENTAIRE SALLE VIRTUELLE
  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }

  closePopupCommentaire() {
    this.displayStyle = "none";
  }

  findAllCommentaires(){
    this.commentaireSalleVirtuelleService.findAll().subscribe((data: any[]) => {this.commentairesSalleVirtuelle = data;});
    console.log(this.commentairesSalleVirtuelle);
  }

  saveCommentaire(idSalleVirt:number){
    this.commentaireSalleVirtuelleService.save(idSalleVirt, this.commentaireSalleVirtuelle).subscribe(
      ()=>{
        this.findAllCommentaires(); 
        this.commentaireSalleVirtuelle = new CommentaireSalleVirtuelle(); 
        this.displayStyle = "none";
      }
    )
  }


  //SIGNALEMENT SALLE VIRTUELLE
  displayStyle1 = "none";

  openPopup1() {
    this.displayStyle1 = "block";
  }

  closePopupSignalement() {
    this.displayStyle1 = "none";
  }

  findAllSignalements(){
    this.signalementSalleVirtuelleService.findAll().subscribe((data: any[]) => {this.signalementsSalleVirtuelle = data;});
    console.log(this.signalementsSalleVirtuelle);
  }

  saveSignalement(idSalleVirt:number){
    this.signalementSalleVirtuelleService.save(idSalleVirt, this.signalementSalleVirtuelle).subscribe(
      ()=>{
        this.findAllSignalements(); 
        this.signalementSalleVirtuelle = new SignalementSalleVirtuelle(); 
        this.displayStyle1 = "none";
      }
    )
  }

  

  

}
