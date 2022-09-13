import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignalementOeuvre } from '../models/signalement-oeuvre';

@Injectable({
  providedIn: 'root'
})
export class SignalementOeuvreService {
  private baseUrl = "http://localhost:7070/signalementOeuvre";

  constructor(private httpClient:HttpClient) { }

  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  public save(idOeuvre:string, username:string, signalementOeuvre:SignalementOeuvre) : Observable<any>{
    return this.httpClient.post(this.baseUrl+"/"+idOeuvre+"/"+username,signalementOeuvre);
  }

  public delete(id:number) : Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/"+id);
  }
}
