import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProprietaireService {
  private baseUrl = "http://localhost:7070/Proprietaires";

  constructor(private httpClient: HttpClient) { }

  public findAll(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  public save(variable: any): Observable<any> {
    return this.httpClient.post(this.baseUrl, variable);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/" + id);
  }

  public findByUsername(username: string): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/" + username)
  }
}
