import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentaireSalleVirtuelle } from '../models/commentaire-salle-virtuelle';

@Injectable({
  providedIn: 'root'
})
export class CommentaireSalleVirtuelleService {
  private baseUrl = "http://localhost:7070/commentaireSalleVirt";

  constructor(private httpClient:HttpClient) { }

  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  public save(idSalleVirt:number, commentaireSalleVirtuelle:CommentaireSalleVirtuelle) : Observable<any>{
    return this.httpClient.post(this.baseUrl+"/"+idSalleVirt, commentaireSalleVirtuelle);
  }

  public delete(id:number) : Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/"+id);
  }
}
