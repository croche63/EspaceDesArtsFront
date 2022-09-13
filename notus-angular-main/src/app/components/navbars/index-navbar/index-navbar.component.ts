import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AppService } from "src/app/app.service";

@Component({
  selector: "app-index-navbar",
  templateUrl: "./index-navbar.component.html",
})
export class IndexNavbarComponent implements OnInit {
  navbarOpen = false;
  

  constructor(private appService: AppService, private router:Router) { }

  ngOnInit(): void { }

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }

  isLoggedIn(){
    if(this.appService.authenticated == true) {
      return false;
    } else {
      return true;
    }
  }

  logout(){
    this.appService.logout(() => {this.router.navigateByUrl("/")});

    // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    // this.router.onSameUrlNavigation = 'reload';
    // // this.router.navigate(['/same-route']);

    // this.router.navigate(["/sdbjla"]);

  }

}
