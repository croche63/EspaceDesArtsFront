import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SalleExposition } from '../models/salle-exposition';

@Injectable({
  providedIn: 'root'
})
export class SalleExpositionService {

  private baseUrl = "http://localhost:7070/SalleExpositions";

  constructor(private httpClient:HttpClient) { }

  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  public save(salleExposition:SalleExposition): Observable<any> {
    return this.httpClient.post(this.baseUrl, salleExposition);
  }


  public saveSalle(username:string, logo:File, salleExposition:SalleExposition) : Observable<any>{
    const formData=new FormData();
    formData.append('libelle',salleExposition.libelle);
    formData.append('dimensionSalle',salleExposition.dimensionSalle);
    formData.append('numeroRue',salleExposition.adresse.numeroRue.toString());
    formData.append('nomRue',salleExposition.adresse.nomRue);
    formData.append('codePostal',salleExposition.adresse.codePostal.toString());
    formData.append('ville',salleExposition.adresse.ville);
    formData.append('pays',salleExposition.adresse.pays);
    formData.append('logo',logo);
    const requete = new HttpRequest('POST',this.baseUrl+"/"+username,formData,
    {reportProgress:true,responseType:'text'});
    return this.httpClient.request(requete);
  }

  public delete(id:number) : Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/"+id);
  }
  public findById(id:string): Observable<any>{
    return this.httpClient.get(this.baseUrl+"/"+id);
  }
  public update(salleV: any): Observable<any> {
    var salleVParse = JSON.parse(salleV)
    return this.httpClient.put(this.baseUrl + "/" + salleV.id, salleVParse)
  }

}
