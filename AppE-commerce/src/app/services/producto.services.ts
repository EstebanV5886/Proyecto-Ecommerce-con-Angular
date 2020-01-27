import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { Global } from './global';

@Injectable()
export class ProductoService{

    public url: string;
    public productos:Array<Producto>;
    
    constructor(
        private _http: HttpClient
    ){

        this.url = Global.url;

    }

    getProductos():Observable<any>{
        return this._http.get(this.url + 'products')
    }

    getProducto(id: string):Observable<any>{
        return this._http.get(this.url + 'product/' + id);
    }    
}