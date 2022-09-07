import { Component, OnInit } from "@angular/core";
import { Artiste } from "src/app/models/artiste";
import { Reservation } from "src/app/models/reservation";
import { SalleExposition } from "src/app/models/salle-exposition";
import { ArtisteService } from "src/app/services/artiste.service";
import { ReservationService } from "src/app/services/reservation.service";
import { SalleExpositionService } from "src/app/services/salle-exposition.service";

@Component({
  selector: "app-tables",
  templateUrl: "./tables.component.html",
})
export class TablesComponent implements OnInit {
  reservations!: any[];
  reservation : Reservation = new Reservation();

  artistes!: any[];
  artiste : Artiste = new Artiste();

  salleExpositions!: any[];
  salleExposition : SalleExposition = new SalleExposition();



  constructor(private reservationService:ReservationService, private artisteService:ArtisteService, private salleExpositionService:SalleExpositionService) {}

  ngOnInit(): void {
    this.findAllArtistes();
    this.findAllSallesExposition();
  }

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

  findAllArtistes(){
    this.artisteService.findAll().subscribe((data: any[]) => {this.artistes = data;});
  }

  findAllSallesExposition(){
    this.salleExpositionService.findAll().subscribe((data: any[]) => {this.salleExpositions = data;});
  }

  

}
