import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root'
})
export class ArtisteService {
  private baseUrl = "http://localhost:7070/Artistes";

  constructor(private httpClient: HttpClient, private appService: AppService) { }

  public findAll(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  public save(artiste: any): Observable<any> {
    return this.httpClient.post(this.baseUrl, artiste);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/" + id);
  }

  public findByUsername(username: string): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/" + username);
  }
}
