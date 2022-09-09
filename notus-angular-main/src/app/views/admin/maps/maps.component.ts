import { Component, OnInit } from "@angular/core";
import { AppService } from "src/app/app.service";
import { CommentaireSalleExposition } from "src/app/models/commentaire-salle-exposition";
import { CommentaireSalleExpositionService } from "src/app/services/commentaire-salle-exposition.service";

@Component({
  selector: "app-maps",
  templateUrl: "./maps.component.html",
  /*selector: "app-table-list",
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']*/
})
export class MapsComponent implements OnInit {
  commentaire!:any[];
  commentaireSalleExposition:CommentaireSalleExposition=new CommentaireSalleExposition;

  constructor(private commentaireSalleExpositionService:CommentaireSalleExpositionService, private appService:AppService) { }

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
  authorities(){
    if(this.appService.isAdmin == true){
      return false;
    }else{
      return true;
    }
  }
}

/*@Component({
  selector: "app-maps",
  templateUrl: "./maps.component.html",
})
export class MapsComponent1 implements OnInit{
  constructor(){}
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

}*/
