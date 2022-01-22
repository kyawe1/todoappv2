import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Api } from '../models/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }

  private base_url='http://localhost:8000/api/v1/'

  private get_url(url:string){
    return this.base_url+url;
  }
  get<T>(url : string){
    return this.httpClient.get<any>(this.get_url(url)).pipe(
      map(value=>value.data)
    );
  }
  add<T>(url:string,object:T){
    return this.httpClient.post<any>(this.get_url(url),JSON.stringify(object));
  }
  update<T>(url:string,object:T){
    return this.httpClient.put<boolean>(this.get_url(url),object);
  }
  create<T>(url:string,object:T){
    console.log("make a post request")
    return this.httpClient.post<boolean>(this.get_url(url),object);
  }
}
