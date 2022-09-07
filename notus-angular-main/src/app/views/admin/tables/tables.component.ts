import { Component, OnInit } from "@angular/core";
import { Reservation } from "src/app/models/reservation";
import { ReservationService } from "src/app/services/reservation.service";

@Component({
  selector: "app-tables",
  templateUrl: "./tables.component.html",
})
export class TablesComponent implements OnInit {
  reservations!: any[];
  reservation : Reservation = new Reservation()


  constructor(private reservationService:ReservationService) {}

  ngOnInit(): void {
    this.findAllReservations();
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

  delete(id:number){
    this.reservationService.delete(id).subscribe(()=>{this.findAllReservations()});
  }

}
