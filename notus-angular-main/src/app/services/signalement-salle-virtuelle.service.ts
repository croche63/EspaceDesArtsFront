import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignalementSalleVirtuelle } from '../models/signalement-salle-virtuelle';

@Injectable({
  providedIn: 'root'
})
export class SignalementSalleVirtuelleService {
  private baseUrl = "http://localhost:7070/signalementSalleVirt";

  constructor(private httpClient:HttpClient) { }

  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  public save(idSalleVirt:number, signalementSalleVirtuelle:SignalementSalleVirtuelle) : Observable<any>{
    return this.httpClient.post(this.baseUrl+"/"+idSalleVirt,signalementSalleVirtuelle);
  }

  public delete(id:number) : Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/"+id);
  }
}
