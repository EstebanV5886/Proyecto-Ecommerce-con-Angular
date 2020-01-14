import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { Global } from './global';

@Injectable()

export class CarritoService{
    items = [];
    public url: string;
    
    constructor(
        private _http: HttpClient 
    ){
        this.url = Global.url;
    }

      addToCart(product){
        this.items.push(product);
      }
    
      getItems(id: string):Observable<any>{
        return this._http.get(this.url + 'add-to-cart/' + id);
      }
    
      clearCart(){
        this.items = [];
        return this.items;
      }
    
}