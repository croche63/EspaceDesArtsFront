import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SalleVirtuelle } from "src/app/models/salle-virtuelle";
import { SalleVirtuelleService } from "src/app/services/salle-virtuelle.service";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
})
export class IndexComponent implements OnInit {
  constructor(private salleVirtuelleService:SalleVirtuelleService,
    private router:Router) {}

  ngOnInit(): void {}


  selectSalleVirtu(salleV:SalleVirtuelle){
    //step 2 
    localStorage.removeItem("afficheSalleV")
    // step 1
    localStorage.setItem("afficheSalleV",salleV.id.toString())
    // step 3
    this.router.navigate(["/profile",salleV.id])


  }
}
