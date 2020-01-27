import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Producto } from '../models/producto';
import { Global } from './global';
import { Cart } from '../models/cart';

@Injectable()

export class CarritoService{

    private subject: BehaviorSubject<Producto[]> = new BehaviorSubject([]);
    private itemsCarrito : Producto[] = [];
    public url: string;
    
    constructor(
        private _http: HttpClient 
    ){
        this.url = Global.url;
    }

      addToCart(producto: Producto){
        this.subject.next([...this.itemsCarrito, producto]);
      }


       /*getItems():Cart[]{

        if(localStorage.getItem('items') === null){
          this.items = [];
        }else{
          console.log(this.items = JSON.parse(localStorage.getItem('items')));
        }
        return this.items

      }*/
     

      removeItem(item: Producto){
        for (let i = 0; this.itemsCarrito.length; i++){
           if(item == this.itemsCarrito[i]){
             this.itemsCarrito.splice(i, 1);
             localStorage.setItem('items', JSON.stringify(this.itemsCarrito))
           }
        }
      }
    
      getItems(id: string):Observable<any>{
        return this._http.get(this.url + 'add-to-cart/' + id);
      }
    
      clearCart(){
        this.itemsCarrito = [];
        return this.itemsCarrito;
      }
    
}  