import { Component, OnInit } from "@angular/core";
import { SalleVirtuelle } from "src/app/models/salle-virtuelle";
import { ArtisteService } from "src/app/services/artiste.service";
import { SalleVirtuelleService } from "src/app/services/salle-virtuelle.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
})
export class ProfileComponent implements OnInit {
 salle!:SalleVirtuelle
  constructor(
    private salleService:SalleVirtuelleService,
    private artisteService:ArtisteService
  ) {}

  ngOnInit(): void {
    
  }

  

}
