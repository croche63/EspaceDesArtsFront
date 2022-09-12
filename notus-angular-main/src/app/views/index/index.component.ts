import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AppService } from "src/app/app.service";
import { Adresse } from "src/app/models/adresse";
import { Reservation } from "src/app/models/reservation";
import { SalleExposition } from "src/app/models/salle-exposition";
import { SalleVirtuelle } from "src/app/models/salle-virtuelle";
import { OeuvreService } from "src/app/services/oeuvre.service";
import { SalleExpositionService } from "src/app/services/salle-exposition.service";
import { SalleVirtuelleService } from "src/app/services/salle-virtuelle.service";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
})
export class IndexComponent implements OnInit {
  constructor(private salleVirtuelleService:SalleVirtuelleService,
    private oeuvreService:OeuvreService,
    private salleExpositionService:SalleExpositionService,
    private appService:AppService,private router:Router) {}
    salleExpositions!: SalleExposition[];
    salleVirtuelles!: SalleVirtuelle[];
    adresse!:Adresse;reservations!:Reservation[];
    nbr!:number

  ngOnInit(): void {
    this.findAllSallesExposition();
    this.findAllSallesVirtuelle();
    // nbr:number = this.reservations.length;

  }

  findAllSallesExposition(){
    this.salleExpositionService.findAll().subscribe((data: any[]) => {this.salleExpositions = data;
    console.log(this.salleExpositions);
  });
  }

  findAllSallesVirtuelle(){
    this.salleVirtuelleService.findAll().subscribe((data: any[]) => {this.salleVirtuelles = data;
    console.log(this.salleVirtuelles  );
  });
  }


  afficherSalleExpo(idSalleExpo:number){
    localStorage.removeItem("idSalleExpo")
    localStorage.setItem("idSalleExpo",idSalleExpo.toString())
    this.router.navigate(['/landing',idSalleExpo.toString()]);
  }

  affcherSalleVirtu(idSalleVirtu:number){
    //step 2 
    localStorage.removeItem("afficheSalleV")
    // step 1
    localStorage.setItem("afficheSalleV",idSalleVirtu.toString())
    // step 3
    this.router.navigate(["/profile",idSalleVirtu.toString()])
  }

}