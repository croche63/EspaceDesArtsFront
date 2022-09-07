import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class ArtisteService {
  private baseUrl = "http://localhost:7070/Utilisateurs";

  constructor(private httpClient:HttpClient) { }

  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  public save(image:File,utilisateur:Utilisateur):Observable<any>{
    const formData=new FormData();
    formData.append('nomU',utilisateur.nom);
    formData.append('prenom',utilisateur.prenom);
    formData.append('username',utilisateur.username);
    formData.append('password',utilisateur.password);
    formData.append('email',utilisateur.email);
    formData.append('numeroTel',utilisateur.numeroTel);
    formData.append('fileU',image);
    const requete = new HttpRequest('POST',this.baseUrl,formData,
    {reportProgress:true,responseType:'text'});
    return this.httpClient.request(requete);
  }

  public delete(id:number) : Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/"+id);
  }
}