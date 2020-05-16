import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  public url: string;

  constructor(private _http: HttpClient) { 
    this.url = Global.url;
  }

  contactUs(emp: any){
    return this._http.post<any>(this.url + 'contact-form', emp)
  }

}
