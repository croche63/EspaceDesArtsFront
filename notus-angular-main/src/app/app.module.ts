import { BrowserModule } from "@angular/platform-browser";
import { Injectable, NgModule } from "@angular/core";

import { HttpClientModule, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { MapsComponent } from "./views/admin/maps/maps.component";
import { SettingsComponent } from "./views/admin/settings/settings.component";
import { TablesComponent } from "./views/admin/tables/tables.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";

// no layouts views
import { IndexComponent } from "./views/index/index.component";
import { LandingComponent } from "./views/landing/landing.component";
import { ProfileComponent } from "./views/profile/profile.component";

// components for views and layouts

import { AdminNavbarComponent } from "./components/navbars/admin-navbar/admin-navbar.component";
import { AuthNavbarComponent } from "./components/navbars/auth-navbar/auth-navbar.component";
import { CardBarChartComponent } from "./components/cards/card-bar-chart/card-bar-chart.component";
import { CardLineChartComponent } from "./components/cards/card-line-chart/card-line-chart.component";
import { CardPageVisitsComponent } from "./components/cards/card-page-visits/card-page-visits.component";
import { CardProfileComponent } from "./components/cards/card-profile/card-profile.component";
import { CardSettingsComponent } from "./components/cards/card-settings/card-settings.component";
import { CardSocialTrafficComponent } from "./components/cards/card-social-traffic/card-social-traffic.component";
import { CardStatsComponent } from "./components/cards/card-stats/card-stats.component";
import { CardTableComponent } from "./components/cards/card-table/card-table.component";
import { FooterAdminComponent } from "./components/footers/footer-admin/footer-admin.component";
import { FooterComponent } from "./components/footers/footer/footer.component";
import { FooterSmallComponent } from "./components/footers/footer-small/footer-small.component";
import { HeaderStatsComponent } from "./components/headers/header-stats/header-stats.component";
import { IndexNavbarComponent } from "./components/navbars/index-navbar/index-navbar.component";
import { MapExampleComponent } from "./components/maps/map-example/map-example.component";
import { IndexDropdownComponent } from "./components/dropdowns/index-dropdown/index-dropdown.component";
import { TableDropdownComponent } from "./components/dropdowns/table-dropdown/table-dropdown.component";
import { PagesDropdownComponent } from "./components/dropdowns/pages-dropdown/pages-dropdown.component";
import { NotificationDropdownComponent } from "./components/dropdowns/notification-dropdown/notification-dropdown.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { UserDropdownComponent } from "./components/dropdowns/user-dropdown/user-dropdown.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ArtisteService } from "./services/artiste.service";
import { EvaluationArtisteService } from "./services/evaluation-artiste.service";
import { Observable } from "rxjs";
import { ProprietaireService } from "./services/proprietaire.service";
import { CommentaireOeuvreService } from "./services/commentaire-oeuvre.service";
import { CommentaireSalleExpositionService } from "./services/commentaire-salle-exposition.service";
import { CommentaireSalleVirtuelleService } from "./services/commentaire-salle-virtuelle.service";
import { EvenementService } from "./services/evenement.service";
import { OeuvreService } from "./services/oeuvre.service";
import { ReservationService } from "./services/reservation.service";
import { RoleService } from "./services/role.service";
import { SalleExpositionService } from "./services/salle-exposition.service";
import { SalleVirtuelleService } from "./services/salle-virtuelle.service";
import { SignalementOeuvreService } from "./services/signalement-oeuvre.service";
import { SignalementSalleExpositionService } from "./services/signalement-salle-exposition.service";
import { SignalementSalleVirtuelleService } from "./services/signalement-salle-virtuelle.service";
import { UtilisateurService } from "./services/utilisateur.service";

@Injectable()
export class XhrInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With','XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardBarChartComponent,
    CardLineChartComponent,
    IndexDropdownComponent,
    PagesDropdownComponent,
    TableDropdownComponent,
    NotificationDropdownComponent,
    UserDropdownComponent,
    SidebarComponent,
    FooterComponent,
    FooterSmallComponent,
    FooterAdminComponent,
    CardPageVisitsComponent,
    CardProfileComponent,
    CardSettingsComponent,
    CardSocialTrafficComponent,
    CardStatsComponent,
    CardTableComponent,
    HeaderStatsComponent,
    MapExampleComponent,
    AuthNavbarComponent,
    AdminNavbarComponent,
    IndexNavbarComponent,
    AdminComponent,
    AuthComponent,
    MapsComponent,
    SettingsComponent,
    TablesComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    LandingComponent,
    ProfileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [ArtisteService, CommentaireOeuvreService, CommentaireSalleExpositionService,
    CommentaireSalleVirtuelleService, EvaluationArtisteService, EvenementService,
    OeuvreService, ProprietaireService, ReservationService, RoleService,
    SalleExpositionService, SalleVirtuelleService, SignalementOeuvreService,
    SignalementSalleExpositionService, SignalementSalleVirtuelleService,
    UtilisateurService,
    {provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi:true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
