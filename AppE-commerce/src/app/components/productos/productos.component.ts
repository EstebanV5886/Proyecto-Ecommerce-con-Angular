import { Component, OnInit } from '@angular/core';
import { Producto } from "../../models/producto";
import { ProductoService } from '../../services/producto.services';
import { Global } from '../../services/global';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers: [ProductoService]
})
export class ProductosComponent implements OnInit {

  public titulo: string;
  public url: string;
  public productos:Array<Producto>;

  constructor(
    private _productoService: ProductoService
  ) {
    this.titulo = "Últimos Productos"
    this.url = Global.url;
   }

  ngOnInit() {
    this._productoService.getProductos().subscribe(
      response => {
        if(response.productos){
          this.productos = response.productos;
        }else{

        }
      },
      error => {
        console.log(error);
      }
    )
  }

}
