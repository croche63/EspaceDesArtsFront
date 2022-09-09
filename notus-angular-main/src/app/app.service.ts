//TODO pas fini

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  authenticated=false;
  responseAll: any;

  isAdmin=false;
  isUser=false;

  username!:string
  
  constructor(private httpClient:HttpClient) { }

  authenticate(credentials:any,callback:any){
      const headers = new HttpHeaders(
      credentials?{
        authorization : 'Basic ' + btoa(credentials.username+ ':' + credentials.password)
      } : {}   
      );
      this.httpClient.get('http://localhost:7070/login/user',{headers:headers}).subscribe(response =>{
        this.responseAll = response;
        if(this.responseAll['username']){
          this.authenticated = true;
          this.username=credentials.username
          for(let i=0;i<this.responseAll['roles'].length;i++){
            if(this.responseAll['roles'][i]['idRole']==1){
              this.isAdmin = true;
            }
            if(this.responseAll['roles'][i]['idRole']==3){
              this.isUser = true;
            }
          }
        }else{
          this.authenticated = false;
        }
        return callback && callback();
      })
  }
}
