import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommentaireOeuvre } from '../models/commentaire-oeuvre';

@Injectable({
  providedIn: 'root'
})
export class CommentaireOeuvreService {
  private baseUrl = "http://localhost:7070/commentaireOeuvre";

  constructor(private httpClient: HttpClient) { }

  public findAll(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  public save(idOeuvre: string, username: string, commentaireOeuvre: CommentaireOeuvre): Observable<any> {
    return this.httpClient.post(this.baseUrl + "/" + idOeuvre + "/" + username, commentaireOeuvre);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/" + id);
  }
}
