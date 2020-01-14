import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.services';
import { Global } from '../../services/global';
import { Producto } from '../../models/producto';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
  providers:[CarritoService]
})
export class CarritoComponent implements OnInit {

  public url:string;
  public items:Array<Producto>;

  constructor(
    private _carritoService: CarritoService,
    private _route: ActivatedRoute

  ) {
    this.url = Global.url;
   }

  ngOnInit()
    {

      this._route.params.subscribe(params => {
        let id = params['id'];

      this._carritoService.getItems(id).subscribe(
        (response: { items: Producto[]; }) => {
          if(response.items){
            this.items = response.items;
          }else{
  
          }
        },
        (error: any) => {
          console.log(error);
        }
      ) 

      });
  }

}
