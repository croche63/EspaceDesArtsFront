import { Component, OnInit } from "@angular/core";
import { connectableObservableDescriptor } from "rxjs/internal/observable/ConnectableObservable";
import { AppService } from "src/app/app.service";
import { Artiste } from "src/app/models/artiste";
import { EvaluationArtiste } from "src/app/models/evaluation-artiste";
import { Oeuvre } from "src/app/models/oeuvre";
import { Reservation } from "src/app/models/reservation";
import { SalleExposition } from "src/app/models/salle-exposition";
import { ArtisteService } from "src/app/services/artiste.service";
import { EvaluationArtisteService } from "src/app/services/evaluation-artiste.service";
import { OeuvreService } from "src/app/services/oeuvre.service";
import { ReservationService } from "src/app/services/reservation.service";
import { SalleExpositionService } from "src/app/services/salle-exposition.service";

@Component({
  selector: "app-tables",
  templateUrl: "./tables.component.html",
})
export class TablesComponent implements OnInit {
  reservations!: any[];
  reservation : Reservation = new Reservation();

  artiste : Artiste = new Artiste();
  username:string = this.appService.username; // "bobtest"

  salleExpositions!: any[];
  salleExposition : SalleExposition = new SalleExposition();

  oeuvres!: any[];
  oeuvre : Oeuvre = new Oeuvre();

  evaluationArtistes!: any[];
  evaluationArtiste : EvaluationArtiste = new EvaluationArtiste();

  selectedFiles:FileList;
  currentFileUpload:File;


  constructor(private reservationService:ReservationService, private artisteService:ArtisteService, 
    private salleExpositionService:SalleExpositionService, private oeuvreService:OeuvreService, 
    private evaluationArtisteService:EvaluationArtisteService, private appService:AppService) {}

  ngOnInit(): void {
    this.findAll()
  }

    
  findAll() {
    this.salleExpositionService.findAll().subscribe((data: any[]) => {this.salleExpositions = data;});
    this.findAllSallesExposition();
    this.findAllReservations();
    this.findAllOeuvres();
    this.findArtiste(this.username);
    this.findAllEvaluations();
  }

  //ARTISTE
   findArtiste(username:string){
    this.artisteService.findByUsername(this.username).subscribe((data: Artiste) => {this.artiste = data;console.log(this.artiste)});
  }

  //SALLES D'EXPOSITION
   findAllSallesExposition(){
    
    console.log(this.salleExpositions);
  }

  //RESERVATIONS
  findAllReservations(){
    this.reservationService.findAll().subscribe((data: any[]) => {this.reservations = data;});
  }

  saveReservation(username:string){
    let salleid = localStorage.getItem("idSalle");
    this.reservationService.save(salleid, username, this.reservation).subscribe(
      ()=>{
        this.findAll(); 
        this.reservation = new Reservation(); 
        this.displayStyle2 = "none";
        localStorage.removeItem("idSalle");
      }
    )
  }
  
  //Modal pour les reservations
  displayStyle2 = "none";

  openPopup2(id:number) { 
    this.displayStyle2 = "block";
    console.log(id);
    localStorage.setItem("idSalle", id.toString());

  }

  closePopupReservation() {
    this.displayStyle2 = "none";
  }

 
  //OEUVRES
  findAllOeuvres(){
    this.oeuvreService.findAll().subscribe((data: any[]) => {this.oeuvres = data;});
    console.log(this.oeuvres);
  }

  deleteOeuvre(id:number){
    this.oeuvreService.delete(id).subscribe(()=>{this.findAllOeuvres})
  }

  selectFile(event:any){
    this.selectedFiles = event.target.files;
  }
  
  saveOeuvre(username:string){
    this.currentFileUpload = this.selectedFiles.item(0);
    this.oeuvreService.save(username, this.currentFileUpload, this.oeuvre).subscribe(
      ()=>{
        this.findAll(); 
        this.oeuvre = new Oeuvre(); 
        this.selectedFiles = undefined;
        this.displayStyle = "none";
      }
    )
  }

  //Modal pour les oeuvres
  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }

  closePopupOeuvre() {
    this.displayStyle = "none";
  }

  

  //Modal pour les evaluations
  displayStyle3 = "none";

  openPopup3(id:number) {
    this.displayStyle3 = "block";
    console.log(id);
    localStorage.setItem("idSalle", id.toString());
  }

  closePopupEvaluation() {
    this.displayStyle3 = "none";
  }

  findAllEvaluations(){
    this.evaluationArtisteService.findAll().subscribe((data: any[]) => {this.evaluationArtistes = data;});
    console.log(this.evaluationArtistes);
  }

  saveEvaluation(username:string){
    let evaluationid = localStorage.getItem("idSalle");
    this.evaluationArtisteService.save(evaluationid, username, this.evaluationArtiste).subscribe(
      ()=>{
        this.findAll(); 
        this.evaluationArtiste = new EvaluationArtiste(); 
        this.displayStyle3 = "none";
        localStorage.removeItem("idSalle");
      }
    )
  }



  isArtiste(){
    if(this.appService.isArtiste == true) {
      return false;
    } else {
      return true;
    }
  }


  

}
