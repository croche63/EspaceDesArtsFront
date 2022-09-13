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
  commentaire!:any[];

  username:string = this.appService.username;

  salleExpo:SalleExposition= new SalleExposition;

  commentairesSalleExposition!:any[];
  commentaireSalleExposition:CommentaireSalleExposition=new CommentaireSalleExposition();
  average!: number;

  commentairesOeuvre!: any[];
  commentaireOeuvre: CommentaireOeuvre = new CommentaireOeuvre();

  signalementsSalleExpo!: any[];
  signalementSalleExpo: SignalementSalleExposition = new SignalementSalleExposition();

  signalementsOeuvre!: any[];
  signalementOeuvre:SignalementOeuvre = new SignalementOeuvre();
 

  constructor(private commentaireSalleExpositionService:CommentaireSalleExpositionService,
    private commentaireOeuvreService: CommentaireOeuvreService,
    private salleExpoService:SalleExpositionService, 
    private signalementSalleExpoService:SignalementSalleExpositionService,
    private signalementOeuvreService:SignalementOeuvreService,
    private appService:AppService, private router:Router) { }

  ngOnInit(): void {
    this.findAllCommentaireSalleExpo();
    this.findAllSalleExpo();
  }
  //Touver une salle d'exposition
  findSalleExpo() {
    let idSalleExpo = localStorage.getItem("afficheSalleV");
    this.salleExpoService.findById(idSalleExpo).subscribe((data) => {
      this.salleExpo = data;
      // console.log("SalleVirtuelle:",this.salleVirtuelle);

      let commentaires = this.salleExpo.commentaireSalleExposition;
      this.commentairesSalleExposition = this.salleExpo.commentaireSalleExposition;
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
  // Partie Salle Expo
  findAllSalleExpo() {
    this.salleExpoService.findAll().subscribe(data => {this.salleExpo=data;})
  }
  saveSalle(){
    this.salleExpoService.save(this.salleExpo).subscribe(()=>{
      this.findAllSalleExpo(); 
      this.salleExpo=new SalleExposition
    })
  }
  delecteSalle(id:number){
    this.salleExpoService.delete(id).subscribe(()=>{
      this.findAllSalleExpo()
    });
  }
  recupereSalleExpo(){
    let idSalleExpo= localStorage.getItem("idSalleExpo");
    this.salleExpoService.findById(idSalleExpo).subscribe((data)=>{this.salleExpo=data});
  }
  selectSalleExpo(salleE:SalleExposition){
   //step 2 
    localStorage.removeItem("afficheSalleE")
    // step 1
    localStorage.setItem("afficheSalleE",salleE.id.toString())
    // step 3
    this.router.navigate(["/profile",salleE.id])
  }

  // Partie Commetaire
  displayStyle = "none";
  openPopupCommetaire() {
    this.displayStyle = "block";
  }
  closePopupCommentaire() {
    this.displayStyle = "none";
  }
  findAllCommentaireSalleExpo() {
    this.commentaireSalleExpositionService.findAll().subscribe(data => {this.commentaire=data;})
  }
  savecommentaire(idSalleExpo: number, username: string){
    this.commentaireSalleExpositionService.save(this.commentaireSalleExposition).subscribe(()=>{
      this.findAllCommentaireSalleExpo();
      this.commentaireSalleExposition=new CommentaireSalleExposition
      this.displayStyle = "none";
        console.log(idSalleExpo);
        console.log(username);
    })
  }
  deletecommentaire(id:number){
    this.commentaireSalleExpositionService.delete(id).subscribe(()=>{
      this.findAllCommentaireSalleExpo()
    });
  }
  // Partie Signalement
  displayStyle1 = "none";

  openPopupSignalement() {
    this.displayStyle1 = "block";
  }

  closePopupSignalement() {
    this.displayStyle1 = "none";
  }

  findAllSignalements() {
    this.signalementSalleExpoService.findAll().subscribe((data: any[]) => { this.signalementsSalleExpo = data; });
    console.log(this.signalementSalleExpoService);
  }

  saveSignalement(idSalleExpo: number, username: string) {
    this.signalementSalleExpoService.save(idSalleExpo, username, this.signalementSalleExpo).subscribe(
      () => {
        this.findAllSignalements();
        this.signalementSalleExpo = new SignalementSalleExposition();
        this.displayStyle1 = "none";
        console.log(idSalleExpo);
        console.log(username);
      }
    )
  }
    //COMMENTAIRE OEUVRE
    displayStyle2 = "none";

    openPopupComOeuvre(idOeuvre: number) {
      this.displayStyle2 = "block";
      console.log(idOeuvre);
      localStorage.setItem("idOeuvre", idOeuvre.toString());
    }
  
    closePopupCommentaireOeuvre() {
      this.displayStyle2 = "none";
    }
  
    findAllCommentairesOeuvre() {
      this.commentaireOeuvreService.findAll().subscribe((data: any[]) => { this.commentairesOeuvre = data; });
    }
  
    saveCommentaireOeuvre(username: string) {
      let idOeuvre = localStorage.getItem("idOeuvre");
      this.commentaireOeuvreService.save(idOeuvre, username, this.commentaireOeuvre).subscribe(
        () => {
          this.findAllCommentairesOeuvre();
          this.commentaireOeuvre = new CommentaireOeuvre();
          this.displayStyle2 = "none";
          localStorage.removeItem("idOeuvre");
        }
      )
    }
  
  
    //SIGNALEMENT OEUVRE
    displayStyle3 = "none";
  
    openPopupSignOeuvre(idOeuvre: number) {
      this.displayStyle3 = "block";
      localStorage.setItem("idOeuvre", idOeuvre.toString());
    }
  
    closePopupSignOeuvre() {
      this.displayStyle3 = "none";
    }
  
    findAllSignOeuvre() {
      this.signalementOeuvreService.findAll().subscribe((data: any[]) => { this.signalementsOeuvre = data; });
      console.log(this.signalementsOeuvre);
    }
  
    saveSignalement3(username: string) {
      let idOeuvre = localStorage.getItem("idOeuvre");
      this.signalementOeuvreService.save(idOeuvre, username, this.signalementOeuvre).subscribe(
        () => {
          this.findAllSignOeuvre();
          this.signalementOeuvre = new SignalementOeuvre();
          this.displayStyle3 = "none";
          localStorage.removeItem("idOeuvre");
        }
      )
    }
  


  authorities(){
    if(this.appService.isAdmin == true){
      return false;
    }else{
      return true;
    }
  }

}

