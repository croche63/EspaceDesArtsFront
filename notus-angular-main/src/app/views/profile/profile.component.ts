import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SalleVirtuelle } from "src/app/models/salle-virtuelle";
import { SalleVirtuelleService } from "src/app/services/salle-virtuelle.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
})
export class ProfileComponent implements OnInit {
 salleV:SalleVirtuelle = new SalleVirtuelle();

  constructor(
    private salleService:SalleVirtuelleService,
    private router:Router
  ) {}

  ngOnInit(): void {
    let salleVId = localStorage.getItem("afficheSalleV")
    this.salleService.findOne(+salleVId).subscribe(data => {this.salleV = data})
    
  }

  

}
