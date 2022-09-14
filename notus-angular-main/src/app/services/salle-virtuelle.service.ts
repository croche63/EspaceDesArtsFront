import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SalleVirtuelle } from '../models/salle-virtuelle';

@Injectable({
  providedIn: 'root'
})
export class SalleVirtuelleService {
  private baseUrl = "http://localhost:7070/SalleVirtuelles";

  constructor(private httpClient: HttpClient) { }

  public findAll(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  public save(salleVirtuelle:SalleVirtuelle): Observable<any> {
    return this.httpClient.post(this.baseUrl, salleVirtuelle);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/" + id);
  }

  public findOne(id: string): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/" + id)
  }

  public update(salleV: any): Observable<any> {
    var salleVParse = JSON.parse(salleV)
    return this.httpClient.put(this.baseUrl + "/" + salleV.id, salleVParse)
  }
}
