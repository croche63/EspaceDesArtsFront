import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AppService } from "src/app/app.service";
import { CommentaireSalleExposition } from "src/app/models/commentaire-salle-exposition";
import { SalleExposition } from "src/app/models/salle-exposition";
import { CommentaireSalleExpositionService } from "src/app/services/commentaire-salle-exposition.service";
import { SalleExpositionService } from "src/app/services/salle-exposition.service";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
})
export class LandingComponent implements OnInit {
  commentaire!:any[];
  salleExpo:SalleExposition[];
  salleExpoService!:SalleExpositionService;
  commentaireSalleExposition:CommentaireSalleExposition=new CommentaireSalleExposition;
 

  constructor(private commentaireSalleExpositionService:CommentaireSalleExpositionService, private appService:AppService, private router:Router) { }

  ngOnInit(): void {
    this.findAllCommentaireSalleExpo();
  }
  findAllCommentaireSalleExpo() {
    this.commentaireSalleExpositionService.findAll().subscribe(data => {this.commentaire=data;})
  }
  
  save(){
    this.commentaireSalleExpositionService.save(this.commentaireSalleExposition).subscribe(()=>{this.findAllCommentaireSalleExpo();this.commentaireSalleExposition=new CommentaireSalleExposition})
  }
  delete(id:number){
    this.commentaireSalleExpositionService.delete(id).subscribe(()=>{this.findAllCommentaireSalleExpo()});
  }
  recupereSalleExpo(){
    let idSalleExpo= localStorage.getItem("idSalleExpo");
    this.salleExpoService.findById(idSalleExpo).subscribe((data)=>{this.salleExpo=data});
  }
  authorities(){
    if(this.appService.isAdmin == true){
      return false;
    }else{
      return true;
    }
  }
  selectSalleExpo(salleE:SalleExposition){
    //step 2 
    localStorage.removeItem("afficheSalleE")
    // step 1
    localStorage.setItem("afficheSalleE",salleE.id.toString())
    // step 3
    this.router.navigate(["/profile",salleE.id])
  }
}

