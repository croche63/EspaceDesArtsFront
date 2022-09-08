import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AppService } from "src/app/app.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent {

  credentials = {username: '', password:''}

  constructor(private appService:AppService, private httpClient:HttpClient, private router:Router) { }

  // TODO rediriger vers autre page
  login() {
    this.appService.authenticate(this.credentials, () => {this.router.navigateByUrl("/")});
    return false;
  }
}
