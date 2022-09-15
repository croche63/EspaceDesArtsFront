import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AppService } from "src/app/app.service";
import { CommentaireOeuvre } from "src/app/models/commentaire-oeuvre";
import { CommentaireSalleExposition } from "src/app/models/commentaire-salle-exposition";
import { SalleExposition } from "src/app/models/salle-exposition";
import { SignalementOeuvre } from "src/app/models/signalement-oeuvre";
import { SignalementSalleExposition } from "src/app/models/signalement-salle-exposition";
import { CommentaireOeuvreService } from "src/app/services/commentaire-oeuvre.service";
import { CommentaireSalleExpositionService } from "src/app/services/commentaire-salle-exposition.service";
import { SalleExpositionService } from "src/app/services/salle-exposition.service";
import { SignalementOeuvreService } from "src/app/services/signalement-oeuvre.service";
import { SignalementSalleExpositionService } from "src/app/services/signalement-salle-exposition.service";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
})
export class LandingComponent implements OnInit {

  username: string = this.appService.username;

  salleExpo: SalleExposition = new SalleExposition();

  commentairesSalleExposition!: CommentaireSalleExposition[];
  commentaireSalleExposition: CommentaireSalleExposition = new CommentaireSalleExposition();
  average!: number;

  signalementsSalleExposition!: SignalementSalleExposition[];
  signalementSalleExposition: SignalementSalleExposition = new SignalementSalleExposition();

  commentairesOeuvre!: CommentaireOeuvre[];
  commentaireOeuvre: CommentaireOeuvre = new CommentaireOeuvre();

  signalementsOeuvre!: SignalementOeuvre[];
  signalementOeuvre: SignalementOeuvre = new SignalementOeuvre();


  constructor(private SalleExpositionService: SalleExpositionService, private router: Router,
    private commentaireSalleExpositionService: CommentaireSalleExpositionService,
    private signalementSalleExpositionService: SignalementSalleExpositionService,
    private commentaireOeuvreService: CommentaireOeuvreService,
    private signalementOeuvreService: SignalementOeuvreService,
    private appService: AppService) { }

  ngOnInit(): void {
    this.findAll();
    // this.noteSalleVirtu();
  }

  findAll(){
    this.SalleExpositionService.findAll()
    this.findSalleExposition()
    this.findAllCommentaires()
    this.findAllCommentaires()
    this.findAllSignalements()
    this.findAllSignalements3()
  }

  findSalleExposition() {
    let idSalleExpo = localStorage.getItem("idSalleExpo");
    this.SalleExpositionService.findById(idSalleExpo).subscribe((data:SalleExposition) => {
      this.salleExpo = data;
      // console.log("SalleExposition:",this.SalleExposition);
      console.log(this.salleExpo);

      let commentaires = this.salleExpo.commentaireSalleExposition;
      this.commentairesSalleExposition = this.salleExpo.commentaireSalleExposition;
      // console.log('Commentaires:',commentaires);

      // console.log("com", commentaires);
      // console.log("commentairesSalleExposition", this.commentairesSalleExposition);


      let note = 0;
      for (let i = 0; i < commentaires.length; i++) {
        // console.log(commentaires[i].note);        
        note += commentaires[i].note;
        // console.log('Note',commentaires[i].note);
      }
      this.average = (note / commentaires.length)
      // console.log('Moyenne:',this.average);
      return this.average;

    });
  }

  //COMMENTAIRE SALLE VIRTUELLE
  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }

  closePopupCommentaire() {
    this.displayStyle = "none";
  }

  findAllCommentaires() {
    this.commentaireSalleExpositionService.findAll().subscribe((data: any[]) => { this.commentairesSalleExposition = data; });
    // console.log("commentairesSalleExposition91", this.commentairesSalleExposition);
  }

  saveCommentaire(idSalleExpo: number, username: any) {
    this.commentaireSalleExpositionService.save(idSalleExpo, username, this.commentaireSalleExposition).subscribe(
      () => {
        this.findAll(); 
        this.commentaireSalleExposition = new CommentaireSalleExposition();
        this.displayStyle = "none";
        // console.log(idSalleExpo);
        // console.log(username);
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

  findAllSignalements() {
    this.signalementSalleExpositionService.findAll().subscribe((data: any[]) => { this.signalementsSalleExposition = data; });
    // console.log(this.signalementsSalleExposition);
  }

  saveSignalement(idSalleExpo: number, username: string) {
    this.signalementSalleExpositionService.save(idSalleExpo, username, this.signalementSalleExposition).subscribe(
      () => {
        this.findAll(); 
        this.signalementSalleExposition = new SignalementSalleExposition();
        this.displayStyle1 = "none";
        // console.log(idSalleExpo);
        // console.log(username);
      }
    )
  }


  //COMMENTAIRE OEUVRE
  displayStyle2 = "none";

  openPopup2(idOeuvre: number) {
    this.displayStyle2 = "block";
    console.log(idOeuvre);
    localStorage.setItem("idOeuvre", idOeuvre.toString());
  }

  closePopupCommentaire2() {
    this.displayStyle2 = "none";
  }

  findAllCommentaires2() {
    this.commentaireOeuvreService.findAll().subscribe((data: any[]) => { this.commentairesOeuvre = data; });
  }

  saveCommentaire2(username: string) {
    let idOeuvre = localStorage.getItem("idOeuvre");
    this.commentaireOeuvreService.save(idOeuvre, username, this.commentaireOeuvre).subscribe(
      () => {
        this.findAll(); 
        this.commentaireOeuvre = new CommentaireOeuvre();
        this.displayStyle2 = "none";
        localStorage.removeItem("idOeuvre");
      }
    )
  }


  //SIGNALEMENT OEUVRE
  displayStyle3 = "none";

  openPopup3(idOeuvre: number) {
    this.displayStyle3 = "block";
    localStorage.setItem("idOeuvre", idOeuvre.toString());
  }

  closePopupSignalement3() {
    this.displayStyle3 = "none";
  }

  findAllSignalements3() {
    this.signalementOeuvreService.findAll().subscribe((data: any[]) => { this.signalementsOeuvre = data; });
    // console.log(this.signalementsOeuvre);
  }

  saveSignalement3(username: string) {
    let idOeuvre = localStorage.getItem("idOeuvre");
    this.signalementOeuvreService.save(idOeuvre, username, this.signalementOeuvre).subscribe(
      () => {
        this.findAll(); 
        this.signalementOeuvre = new SignalementOeuvre();
        this.displayStyle3 = "none";
        localStorage.removeItem("idOeuvre");
      }
    )
  }




  authorities() {
    if (this.appService.isAdmin == true) {
      return false;
    } else {
      return true;
    }
  }

}

