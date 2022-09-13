import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AppService } from "src/app/app.service";
import { CommentaireOeuvre } from "src/app/models/commentaire-oeuvre";
import { CommentaireSalleVirtuelle } from "src/app/models/commentaire-salle-virtuelle";
import { SalleVirtuelle } from "src/app/models/salle-virtuelle";
import { SignalementOeuvre } from "src/app/models/signalement-oeuvre";
import { SignalementSalleVirtuelle } from "src/app/models/signalement-salle-virtuelle";
import { CommentaireOeuvreService } from "src/app/services/commentaire-oeuvre.service";
import { CommentaireSalleVirtuelleService } from "src/app/services/commentaire-salle-virtuelle.service";
import { SalleVirtuelleService } from "src/app/services/salle-virtuelle.service";
import { SignalementOeuvreService } from "src/app/services/signalement-oeuvre.service";
import { SignalementSalleVirtuelleService } from "src/app/services/signalement-salle-virtuelle.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
})
export class ProfileComponent implements OnInit {

  username: string = this.appService.username;

  salleVirtuelle: SalleVirtuelle = new SalleVirtuelle();

  commentairesSalleVirtuelle!: any[];
  commentaireSalleVirtuelle: CommentaireSalleVirtuelle = new CommentaireSalleVirtuelle();
  average!: number;

  signalementsSalleVirtuelle!: any[];
  signalementSalleVirtuelle: SignalementSalleVirtuelle = new SignalementSalleVirtuelle();

  commentairesOeuvre!: any[];
  commentaireOeuvre: CommentaireOeuvre = new CommentaireOeuvre();

  signalementsOeuvre!: any[];
  signalementOeuvre: SignalementOeuvre = new SignalementOeuvre();

  constructor(private salleVirtuelleService: SalleVirtuelleService, private router: Router,
    private commentaireSalleVirtuelleService: CommentaireSalleVirtuelleService,
    private signalementSalleVirtuelleService: SignalementSalleVirtuelleService,
    private commentaireOeuvreService: CommentaireOeuvreService,
    private signalementOeuvreService: SignalementOeuvreService,
    private appService: AppService) { }

  ngOnInit(): void {
    this.findSalleVirtuelle();
    // this.noteSalleVirtu();
  }

  findSalleVirtuelle() {
    let idSalleVirt = localStorage.getItem("afficheSalleV");
    this.salleVirtuelleService.findOne(idSalleVirt).subscribe((data) => {
      this.salleVirtuelle = data;
      // console.log("SalleVirtuelle:",this.salleVirtuelle);

      let commentaires = this.salleVirtuelle.commentaireSalleVirtuelle;
      this.commentairesSalleVirtuelle = this.salleVirtuelle.commentaireSalleVirtuelle;
      // console.log('Commentaires:',commentaires);


      let note = 0;
      for (let i = 0; i < commentaires.length; i++) {
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
    this.commentaireSalleVirtuelleService.findAll().subscribe((data: any[]) => { this.commentairesSalleVirtuelle = data; });
    console.log(this.commentairesSalleVirtuelle);
  }

  saveCommentaire(idSalleVirt: number, username: string) {
    this.commentaireSalleVirtuelleService.save(idSalleVirt, username, this.commentaireSalleVirtuelle).subscribe(
      () => {
        this.findAllCommentaires();
        this.commentaireSalleVirtuelle = new CommentaireSalleVirtuelle();
        this.displayStyle = "none";
        console.log(idSalleVirt);
        console.log(username);
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
    this.signalementSalleVirtuelleService.findAll().subscribe((data: any[]) => { this.signalementsSalleVirtuelle = data; });
    console.log(this.signalementsSalleVirtuelle);
  }

  saveSignalement(idSalleVirt: number, username: string) {
    this.signalementSalleVirtuelleService.save(idSalleVirt, username, this.signalementSalleVirtuelle).subscribe(
      () => {
        this.findAllSignalements();
        this.signalementSalleVirtuelle = new SignalementSalleVirtuelle();
        this.displayStyle1 = "none";
        console.log(idSalleVirt);
        console.log(username);
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
        this.findAllCommentaires2();
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
    console.log(this.signalementsOeuvre);
  }

  saveSignalement3(username: string) {
    let idOeuvre = localStorage.getItem("idOeuvre");
    this.signalementOeuvreService.save(idOeuvre, username, this.signalementOeuvre).subscribe(
      () => {
        this.findAllSignalements3();
        this.signalementOeuvre = new SignalementOeuvre();
        this.displayStyle3 = "none";
        localStorage.removeItem("idOeuvre");
      }
    )
  }




}
