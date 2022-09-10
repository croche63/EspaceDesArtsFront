import { Component, OnInit } from "@angular/core";
import { connectableObservableDescriptor } from "rxjs/internal/observable/ConnectableObservable";
import { AppService } from "src/app/app.service";
import { Artiste } from "src/app/models/artiste";
import { Oeuvre } from "src/app/models/oeuvre";
import { Reservation } from "src/app/models/reservation";
import { SalleExposition } from "src/app/models/salle-exposition";
import { ArtisteService } from "src/app/services/artiste.service";
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
  username:string =  "bobtest" //this.appService.username;

  salleExpositions!: any[];
  salleExposition : SalleExposition = new SalleExposition();

  oeuvres!: any[];
  oeuvre : Oeuvre = new Oeuvre();

  selectedFiles:FileList;
  currentFileUpload:File;


  constructor(private reservationService:ReservationService, private artisteService:ArtisteService, 
    private salleExpositionService:SalleExpositionService, private oeuvreService:OeuvreService, private appService:AppService) {}

  ngOnInit(): void {
    this.findAllSallesExposition();
    this.findArtiste(this.username);
  }

    
  //ARTISTE
   findArtiste(username:string){
    this.artisteService.findByUsername("bobtest").subscribe((data: Artiste) => {this.artiste = data;console.log(this.artiste)});
  }

  //RESERVATIONS
  findAllReservations(){
    this.reservationService.findAll().subscribe((data: any[]) => {this.reservations = data;});
  }

  save(){
    this.reservationService.save(this.reservation).subscribe(
      ()=>{
        this.findAllReservations(); 
        this.reservation = new Reservation(); 
      }
    )
  }

  //SALLES D'EXPOSITION
  findAllSallesExposition(){
    this.salleExpositionService.findAll().subscribe((data: any[]) => {this.salleExpositions = data;});
    console.log(this.salleExpositions);
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
        this.findAllOeuvres(); 
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
  
  /*closePopup() {
    this.displayStyle = "none";
  }*/

}
