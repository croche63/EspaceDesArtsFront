import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalleExpositionService {

  private baseUrl = "http://localhost:7070/SalleExpositions";

  constructor(private httpClient:HttpClient) { }

  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  public save(evaluationArtiste:any) : Observable<any>{
    return this.httpClient.post(this.baseUrl,evaluationArtiste);
  }

  public delete(id:number) : Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/"+id);
  }

}
