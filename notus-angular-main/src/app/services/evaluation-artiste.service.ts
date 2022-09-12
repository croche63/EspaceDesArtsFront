import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EvaluationArtiste } from '../models/evaluation-artiste';

@Injectable({
  providedIn: 'root'
})
export class EvaluationArtisteService {
  private baseUrl = "http://localhost:7070/EvaluationArtistes";

  constructor(private httpClient:HttpClient) { }

  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  public save(idSalle:string, username:string, evaluationArtiste:EvaluationArtiste) : Observable<any>{
    return this.httpClient.post(this.baseUrl+"/"+username+"/"+idSalle,evaluationArtiste);
  }

  public delete(id:number) : Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/"+id);
  }
}
