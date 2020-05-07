import { Component, OnInit } from "@angular/core";
import { CarritoService } from "../../services/carrito.services";
import { Global } from "../../services/global";
import { Cart } from '../../models/cart';
import { Producto } from "../../models/producto";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { ValuesPipe } from '../../pipes/values.pipe';


@Component({
  selector: "app-carrito",
  templateUrl: "./carrito.component.html",
  styleUrls: ["./carrito.component.css"],
  providers: [CarritoService]
})
export class CarritoComponent implements OnInit {

  public url: string;
  public items: Producto[] = [];

  constructor(
    private _carritoService: CarritoService,
    private _route: ActivatedRoute,
  ) {
    this.url = Global.url;
  }

  ngOnInit() {

    this._route.params.subscribe(params => {
      var id = params['id'];
      this._carritoService.getItems(id).subscribe(
        response => {
          if (response) {
            console.log(this.items = response.cart);
          }
      },
        (error: any) => {
          console.log(error);
        }
      );
    });
    
}

  addProduct(item: Producto){
    this._carritoService.addToCart(item);
  }

}
