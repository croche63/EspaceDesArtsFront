import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artiste } from '../models/artiste';
import { Oeuvre } from '../models/oeuvre';

@Injectable({
  providedIn: 'root'
})
export class OeuvreService {
  private baseUrl = "http://localhost:7070/Oeuvres";

  constructor(private httpClient:HttpClient) { }

  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  public save(username:string, image:File,oeuvre:Oeuvre) : Observable<any>{
    const formData=new FormData();
    formData.append('nom',oeuvre.nom);
    formData.append('type',oeuvre.type);
    formData.append('information',oeuvre.information);
    //formData.append('username',username);
    formData.append('prix',oeuvre.prix.toString());
    formData.append('fileU',image);
    const requete = new HttpRequest('POST',this.baseUrl+"/"+username,formData,
    {reportProgress:true,responseType:'text'});
    return this.httpClient.request(requete);
  }

  public delete(id:number) : Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/"+id);
  }

  public findByNom(nom:string) : Observable<any>{
    return this.httpClient.get(this.baseUrl+"/"+nom)
  }

}
