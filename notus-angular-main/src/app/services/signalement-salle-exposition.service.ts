import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignalementSalleExposition } from '../models/signalement-salle-exposition';

@Injectable({
  providedIn: 'root'
})
export class SignalementSalleExpositionService {
  private baseUrl = "http://localhost:7070/signalementSalleExp";

  constructor(private httpClient: HttpClient) { }

  public findAll(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  public save(idSalleExpo: number, username: string, signalementSalleExpo: SignalementSalleExposition): Observable<any> {
    return this.httpClient.post(this.baseUrl + "/" + idSalleExpo + "/" + username + "/", signalementSalleExpo);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/" + id);
  }
}
