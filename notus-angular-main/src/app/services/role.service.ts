import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private baseUrl = "http://localhost:7070/Roles";

  constructor(private httpClient:HttpClient) { }

  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  public save(role:any) : Observable<any>{
    return this.httpClient.post(this.baseUrl,role);
  }

  public delete(id:number) : Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/"+id);
  }

  public findByLibelle(libelle:string) : Observable<any>{
    return this.httpClient.get(this.baseUrl+"/libelle/"+libelle)
  }
}
