import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AppService } from "src/app/app.service";
import { Adresse } from "src/app/models/adresse";
import { Proprietaire } from "src/app/models/proprietaire";
import { Reservation } from "src/app/models/reservation";
import { SalleExposition } from "src/app/models/salle-exposition";
import { SalleVirtuelle } from "src/app/models/salle-virtuelle";
import { ArtisteService } from "src/app/services/artiste.service";
import { ProprietaireService } from "src/app/services/proprietaire.service";
import { ReservationService } from "src/app/services/reservation.service";
import { SalleExpositionService } from "src/app/services/salle-exposition.service";
import { SalleVirtuelleService } from "src/app/services/salle-virtuelle.service";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
})
export class SettingsComponent implements OnInit {

  //TODO Reservation espace expo (voir les reservations de son espace) X
  //TODO Gestion espace expo (Afficher X, Modifier)
  //TODO Planification evenements (Visualiser X, Ajout, modification, supression evenements)
  //TODO Offrir espace virtuel

  editForm!: FormGroup;

  reservations:any[];

  artistes:any[];

  proprietaire:Proprietaire = new Proprietaire();
  username:string = this.appService.username;

  sallesExposition:any[];
  salleExposition:SalleExposition = new SalleExposition();
  sallesVirtuelle:any[];
  salleVirtuelle:SalleVirtuelle = new SalleVirtuelle();
  selectedFiles:FileList;
  currentFileUpload:File;

  constructor(
    private appService:AppService,
    private proprietaireService:ProprietaireService,
    private reservationService:ReservationService,
    private salleExpositionService:SalleExpositionService,
    private artisteService:ArtisteService,
    private salleVirtuelleService:SalleVirtuelleService,
  ) {}

  ngOnInit(): void {
    // Créer une adresse vide pour la salle d'exposition afin d'être capable de la renseigner avec le ngModel
    this.salleExposition.adresse = new Adresse();

    this.findAllInfos();
    console.log(this.proprietaire.prenom);
  }

  findAllInfos() {
    this.reservationService.findAll().subscribe((data: any[]) => {this.reservations = data;});
    this.proprietaireService.findByUsername(this.username).subscribe((data: Proprietaire) => {this.proprietaire = data;console.log(this.proprietaire)});
    this.artisteService.findAll().subscribe((data: any[]) => {this.artistes = data;});
    this.salleExpositionService.findAll().subscribe((data: any[]) => {this.sallesExposition = data;});
    this.salleVirtuelleService.findAll().subscribe((data: any[]) => {this.sallesVirtuelle = data;});
  }

  isProprietaire(){
    if(this.appService.isProprietaire == true) {
      return false;
    } else {
      return true;
    }
  }

  displayStyle2 = "none";

  openPopupSalleExpo(){
    this.displayStyle2 = "block";
  }

  closePopupSalleExpo() {
    this.displayStyle2 = "none";
  }

  selectFile(event:any){
    this.selectedFiles = event.target.files;
  }
  
  saveSalleExpo(username:string){
    this.currentFileUpload = this.selectedFiles.item(0);
    this.salleExpositionService.saveSalle(username, this.currentFileUpload, this.salleExposition).subscribe(
      ()=>{
        this.findAllInfos(); 
        this.salleExposition = new SalleExposition();
        this.salleExposition.adresse = new Adresse();
        this.selectedFiles = undefined;
        this.displayStyle2 = "none";
      }
    )
  }

  //Ajout d'une salle virtuelle
  displayStyle1 = "none";

  openPopupSalleVirtuelle(){
    this.displayStyle1 = "block";
  }

  closePopupSalleVirtuelle() {
    this.displayStyle1 = "none";
  }

  saveSalleVirtuelle(username:string){
    this.salleVirtuelleService.save(username, this.salleVirtuelle).subscribe(
      ()=>{
        this.findAllInfos(); 
        this.salleVirtuelle = new SalleVirtuelle(); 
        this.displayStyle1 = "none";
      }
    )
  }
    
  }



